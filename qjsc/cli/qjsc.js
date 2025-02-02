#!/usr/bin/env node

console.log(__dirname)
const p = require('path').join(__dirname, '..', 'bundle', 'qjsc.js')
if (require('fs').existsSync(p)) {
  require(p)
}
