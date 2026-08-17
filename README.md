# imgproxy

面向 Vercel 的公益 jsDelivr / cdnjs / 图床反代加速服务。

## 功能
- 反代 jsDelivr：`/npm/*`、`/gh/*`、`/wp/*`
- 反代 cdnjs：`/cdnjs/*`
- 反代个人仓库：`/my/*`
- 反代图床：其余路径 → GitHub 图床源

## 优化
- **文件类型正确**：`vercel.json` 显式补加 `.js/.css/.json/.png/.svg/.woff2/.wasm` 等 MIME 类型
- **全 CORS**：`Access-Control-Allow-Origin: *`
- **合理缓存**：代理路径 `public, max-age=31536000, immutable`；首页不缓存

## 部署
在 Vercel 控制台导入本仓库，或本地：

```bash
npm i -g vercel
vercel --prod
```
