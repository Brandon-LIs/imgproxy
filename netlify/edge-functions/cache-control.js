// 如果源站返回 404，则禁止浏览器和 Edge 缓存该响应
export default async (_request, context) => {
  const response = await context.next();
  if (response.status === 404) {
    const headers = new Headers(response.headers);
    headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate, proxy-revalidate"
    );
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  return response;
};

export const config = {
  path: "/*",
};
