#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Zeabur 和其他云环境通常通过 PORT 环境变量指定端口
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '0.0.0.0';

console.log(`Starting Next.js server on ${hostname}:${port}`);
console.log('Environment: NODE_ENV=' + (process.env.NODE_ENV || 'production'));

try {
  // 使用完整路径到 next 命令
  const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');
  execSync(`${nextPath} start -p ${port} -H ${hostname}`, {
    stdio: 'inherit',
    env: {
      ...process.env,
      PORT: port,
    }
  });
} catch (err) {
  console.error('Failed to start server:', err.message);
  process.exit(1);
}

