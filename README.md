# GitHub 图片/文件代理 Worker

这个项目是一个 Cloudflare Worker 脚本，用于代理请求到 GitHub 的原始文件内容 URL。它允许你从 GitHub 获取文件，并添加自定义头，例如启用 CORS。

## 功能

- 代理请求到 GitHub 的原始内容 URL。
- 保留原始请求的方法和头信息。
- 向响应中添加 `Access-Control-Allow-Origin: *` 头以支持 CORS。

## 工作原理

1. **事件监听**：脚本监听 `fetch` 事件。
2. **请求处理**：收到请求时，根据请求路径构建指向 GitHub 原始内容的新 URL。
3. **获取和修改**：将请求转发到 GitHub，获取响应，并添加 `Access-Control-Allow-Origin` 头。
4. **响应**：返回修改后的响应给客户端。

## 使用方法

要使用此脚本，将其部署为 Cloudflare Worker。部署后，可以通过你的 Worker URL 访问 GitHub 原始内容。

## 示例

如果你的 Worker 部署在 `https://your-worker.example.com`，并且你想访问位于 `https://github.com/user/repo/blob/main/file.png` 的文件，可以通过访问：

```
https://your-worker.example.com/user/repo/main/file.png
```

这将获取文件并在响应中包含必要的 CORS 头。

## 注意

- 确保路径正确映射到 GitHub 的原始内容结构。
- 该脚本不处理身份验证；它仅代理公共内容。

## 许可证

该项目是开源的，并在 MIT 许可证下提供。
