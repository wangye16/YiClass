好的，下面是一个针对 CentOS 系统并使用 Node.js 服务的完整步骤，来配置免费的 SSL 证书并启用 HTTPS：

### 1. **安装 Certbot**

首先，更新系统并安装 Certbot（这是 Let's Encrypt 提供的工具，用于自动获取和安装 SSL 证书）。

```bash
# 更新系统
sudo yum update -y

# 安装 EPEL 仓库
sudo yum install epel-release -y

# 安装 Certbot
sudo yum install certbot -y
```

### 2. **获取 SSL 证书**

使用 Certbot 获取 SSL 证书。假设你的服务器的域名是 `example.com`，且 Node.js 服务运行在 HTTP（80）端口。

```bash
# 使用 Certbot 获取证书
sudo certbot certonly --standalone
```

按照提示输入你的域名（例如 `example.com`），并完成验证过程。证书将被保存在 `/etc/letsencrypt/live/yourdomain.com/` 目录下。

### 3. **配置 Node.js 服务以支持 HTTPS**

在获取到 SSL 证书后，我们需要修改 Node.js 服务来启用 HTTPS。假设你已经有一个基本的 Node.js 服务，下面是如何配置它：

1. **创建 HTTPS 服务器**

在你的 Node.js 应用中，加载 SSL 证书并创建一个 HTTPS 服务器。

假设你的 Node.js 代码是类似这样的（这里我们使用 Express 举例）：

```javascript
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// 读取 SSL 证书文件
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/example.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/example.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/example.com/chain.pem')
};

// 启动 HTTPS 服务器
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS server listening on port 443');
});

// 这里继续你的其他路由配置
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
```

这段代码会让你的 Node.js 服务通过 HTTPS 访问。

2. **重定向 HTTP 到 HTTPS（可选）**

为了强制所有流量通过 HTTPS，你可以在 HTTP 端口（通常是 80）上运行一个简单的重定向服务器，自动将访问者重定向到 HTTPS。

```javascript
const http = require('http');

// HTTP 重定向服务器
http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80, () => {
  console.log('HTTP server listening on port 80');
});
```

### 4. **配置自动续期**

Let's Encrypt 的 SSL 证书每 90 天需要续期一次，因此你需要设置一个自动续期任务。

1. **设置 cron 任务来自动续期**

编辑 cron 配置来定期自动续期证书：

```bash
sudo crontab -e
```

然后添加以下行：

```bash
0 0,12 * * * certbot renew --quiet && systemctl reload nginx
```

这个任务会每 12 小时自动检查证书是否需要续期，并自动更新证书。你可以根据需要修改 `nginx` 为其他 Web 服务器的名称，或者省略此命令，如果你的服务器没有使用 Nginx。

### 5. **重启 Node.js 服务**

每次证书更新后，你可能需要重启 Node.js 服务，以确保新证书被应用。

如果你是通过 `pm2` 启动 Node.js 服务，可以这样重启：

```bash
pm2 restart your-app-name
```

如果直接使用 `node` 启动，使用以下命令重启服务：

```bash
# 杀掉现有进程并重新启动
pkill node
node /path/to/your/app.js
```

### 6. **验证 HTTPS 访问**

最后，验证你的站点是否正确启用了 HTTPS，直接访问 `https://yourdomain.com`，并确认浏览器显示了一个安全的锁图标，表示连接已加密。

---

通过这些步骤，你的 CentOS 服务器上的 Node.js 应用应该就能成功启用 HTTPS 和免费的 SSL 证书了。如果有任何问题或者需要进一步的帮助，随时告诉我！