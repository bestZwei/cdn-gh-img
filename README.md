# CDN GitHub Image Proxy

This project is a Cloudflare Pages and Workers setup to proxy images from specific GitHub repositories. It allows you to access images from GitHub in regions where direct access might be restricted.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bestZwei/cdn-gh-img.git
   cd cdn-gh-img
   ```

2. **Configure allowed repositories:**

   Set the `ALLOWED_REPOS` environment variable in Cloudflare Workers to specify which repositories are allowed to be proxied. For example:

   ```
   bestZwei/aaa,bestZwei/abc
   ```

3. **Deploy to Cloudflare Pages:**

   - Go to your Cloudflare dashboard.
   - Create a new Pages project and connect it to this repository.
   - Ensure the `functions` directory is correctly recognized as the entry point for Workers.

4. **Access images:**

   Use the deployed Cloudflare Pages URL to access images. For example:

   ```
   https://your-cloudflare-pages-url/bestZwei/imgs/master/path/to/image.png
   ```

## Notes

- Ensure your GitHub repositories are public.
- Follow GitHub's terms of service to avoid misuse.


### 部署步骤

1. **上传项目到 GitHub**：将项目上传到你的 GitHub 仓库。

2. **配置 Cloudflare Pages**：
   - 在 Cloudflare 仪表板中创建一个新的 Pages 项目。
   - 连接到你的 GitHub 仓库。
   - 设置环境变量 `ALLOWED_REPOS`，指定允许代理的仓库。

3. **部署项目**：完成配置后，部署项目并测试代理 URL。

通过这些步骤，你可以创建一个完整的项目来代理 GitHub 仓库中的图片，并在中国大陆等地区访问这些资源。