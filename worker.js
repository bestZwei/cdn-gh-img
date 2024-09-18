addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const path = url.pathname
  
    // 构建 GitHub 的原始内容 URL
    const targetUrl = `https://raw.githubusercontent.com${path}`
  
    // 转发请求到 GitHub
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers
    })
  
    // 创建新的响应对象
    const modifiedResponse = new Response(response.body, response)
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*')
  
    return modifiedResponse
  }
