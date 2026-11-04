#!/usr/bin/env node
// Local editor server for the Unidade 05 model.
// Serves this folder and lets the page save edits to house.json and house.md.
// No dependencies: run `node server.js` (Node 18+), then open the printed address.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 8000;
const HOST = '127.0.0.1'; // local only
const MAX_BODY = 5 * 1024 * 1024;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function send(res, code, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(body);
}

function writeAtomic(file, text) {
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, text, 'utf8');
  fs.renameSync(tmp, file);
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // same-origin fetches may omit it
  try { return new URL(origin).host === req.headers.host; } catch { return false; }
}

function handleSave(req, res) {
  if (!sameOrigin(req)) return send(res, 403, 'Cross-origin save refused');
  if (!(req.headers['content-type'] || '').startsWith('application/json')) return send(res, 415, 'Expected application/json');
  let size = 0;
  const chunks = [];
  req.on('data', (c) => {
    size += c.length;
    if (size > MAX_BODY) { send(res, 413, 'Model too large'); req.destroy(); return; }
    chunks.push(c);
  });
  req.on('end', () => {
    if (res.writableEnded) return;
    try {
      const { json, md } = JSON.parse(Buffer.concat(chunks).toString('utf8'));
      const model = JSON.parse(json);
      if (!model || !Array.isArray(model.walls) || !Array.isArray(model.floors)) throw new Error('Not a house model');
      writeAtomic(path.join(ROOT, 'house.json'), json.endsWith('\n') ? json : json + '\n');
      if (typeof md === 'string') writeAtomic(path.join(ROOT, 'house.md'), md.endsWith('\n') ? md : md + '\n');
      console.log(`${new Date().toLocaleTimeString()}  saved house.json (${model.walls.length} walls, ${(model.boxes || []).length} boxes, ${(model.conduits || []).length} conduits)`);
      send(res, 200, '{"ok":true}', TYPES['.json']);
    } catch (e) {
      send(res, 400, 'Invalid model: ' + e.message);
    }
  });
}

function serveStatic(req, res) {
  let rel;
  try { rel = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { return send(res, 400, 'Bad path'); }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT + path.sep) || rel.split('/').some((p) => p.startsWith('.'))) return send(res, 403, 'Forbidden');
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'Not found');
    send(res, 200, data, TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
  });
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/api/status' && req.method === 'GET') return send(res, 200, '{"ok":true,"file":"house.json"}', TYPES['.json']);
  if (url === '/api/save' && req.method === 'POST') return handleSave(req, res);
  if (req.method === 'GET' || req.method === 'HEAD') return serveStatic(req, res);
  send(res, 405, 'Method not allowed');
}).listen(PORT, HOST, () => {
  console.log(`Unidade 05 editor: http://127.0.0.1:${PORT}`);
  console.log('Edits are saved to house.json and house.md in this folder. Ctrl+C to stop.');
});
