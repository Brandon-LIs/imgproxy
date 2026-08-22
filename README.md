# imgproxy

公益 jsDelivr / cdnjs / Gravatar / 图床反代加速服务。

## 功能
- 反代 jsDelivr：`/npm/*`、`/gh/*`、`/wp/*`
- 反代 cdnjs：`/cdnjs/*`
- 反代个人仓库：`/my/*`
- 反代 Gravatar：`/avatar/*`
- 反代图床：其余路径 → GitHub 图床源

## 目录
- 根目录：`vercel.json` + `index.html` → **Vercel 部署**
- `netlify/`：Netlify 版本，含 `netlify.toml` + Edge Function → **Netlify 部署**

## 优化
- **文件类型正确**：显式补加 `.js/.css/.json/.png/.svg/.woff2/.wasm` 等 MIME 类型
- **全 CORS**：`Access-Control-Allow-Origin: *`
- **合理缓存**：版本化资源长期缓存；头像缓存较短；图床图片 7 天/30 天；404 不缓存（Netlify Edge Function）

## Vercel 部署
```bash
npm i -g vercel
vercel --prod
```

## Netlify 部署
```bash
cd netlify
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

> Netlify 版域名保持 `jsd.oopss.top`，Vercel 版域名使用 `assets.oopss.top`。
