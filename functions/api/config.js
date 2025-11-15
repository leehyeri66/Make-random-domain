// Cloudflare Pages Functions API
// 文件路径: functions/api/config.js

export async function onRequest(context) {
  // 从环境变量获取父域名，如果没有设置则使用默认值
  const domain = context.env.PARENT_DOMAIN || 'hyeri.us.kg';
  
  return new Response(JSON.stringify({ domain }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}