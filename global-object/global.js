#!/usr/bin/env node

const {node, v8} = process.versions;

process.stdout.write(`Node.js version: ${node}\nV8 version ${v8}\n`);