#!/usr/bin/env node

const p = require('path').join(__dirname, '..', 'bundle', 'qjs.js')
if (require('fs').existsSync(p)) {
  require(p)
}
