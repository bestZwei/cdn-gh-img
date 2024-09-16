export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.substring(1); // 获取路径，去掉开头的斜杠
    const [owner, repo, ...filePath] = path.split('/');

    // GitHub 原始内容 URL
    const githubUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/${filePath.join('/')}`;

    try {
      const response = await fetch(githubUrl);
      if (!response.ok) {
        return new Response('Error fetching image from GitHub', { status: 502 });
      }
      // 返回图片响应
      return new Response(response.body, {
        headers: { 'Content-Type': response.headers.get('Content-Type') },
      });
    } catch (error) {
      return new Response('Error fetching image', { status: 500 });
    }
  },
};
