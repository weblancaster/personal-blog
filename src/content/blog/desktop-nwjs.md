---
title: "Desktop Apps with NW.js"
date: 2024-03-01
excerpt: "A practical guide to building cross-platform desktop applications using NW.js — packaging web technologies into native-feeling apps without leaving JavaScript."
tags: ["desktop", "javascript"]
readTime: "8 min read"
published: true
---

## Introduction

NW.js (formerly node-webkit) lets you build desktop applications using web technologies — HTML, CSS, and JavaScript — while having full access to Node.js APIs and native system capabilities. If you can build a website, you can build a desktop app.

## Why NW.js?

Unlike Electron, NW.js uses Chromium's rendering engine but loads your app directly from a `package.json` entry point. The key difference: in NW.js, Node.js and the browser context share the same JavaScript context, which means you can call `require('fs')` directly inside a `<script>` tag without any bridge.

**Key advantages:**
- Zero context bridge overhead — DOM and Node.js share one JS context
- Chromium rendering (same engine as Chrome)
- Full `npm` ecosystem access from the browser thread
- Single binary packaging via `nwbuild`

## Getting Started

Install NW.js via npm:

```bash
npm install nw --save-dev
```

Your `package.json` needs a `main` field pointing to your HTML entry:

```json
{
  "name": "my-app",
  "main": "index.html",
  "window": {
    "width": 1024,
    "height": 768,
    "title": "My Desktop App"
  }
}
```

## Accessing the File System

Thanks to the shared context, you can read files directly in your frontend code:

```javascript
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
console.log(JSON.parse(data));
```

## Packaging for Distribution

Use `nwbuild` to compile your app into a standalone binary:

```bash
npx nwbuild --mode=build --platform=linux,mac,win --arch=x64 .
```

This produces platform-specific executables in `./build/` that users can run without installing Node.js or a browser.

## Conclusion

NW.js is a pragmatic choice for teams with strong web skills who need to ship a desktop product fast. The shared JS context keeps the architecture simple, and Chromium handles rendering consistently across platforms.
