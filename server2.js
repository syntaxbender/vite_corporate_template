import fs from "node:fs/promises";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

function getFilename(metaUrl) {
  const filename = fileURLToPath(metaUrl);

  return filename;
}
function getDirname(metaUrl) {
  const dirname = path.dirname(getFilename(metaUrl));

  return dirname;
}
// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const base = process.env.BASE || "/";

const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

const app = express();
let vite;
app.use(express.urlencoded({ extended: true }));
// app.use(compression());

// ? Add vite or respective production middlewares
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  // app.use(base, sirv('./dist/client', { extensions: [] }))
  app.use(base, sirv("./dist/client", {
    extensions: [],
    gzip: true,
  }));
}

app.use("*", async (req, res, next) => {
  const url = req.originalUrl;
  let template; let
    render;

  try {
    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render({ path: url }, ssrManifest);
    const html = template
      .replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    console.log(error.stack);
    next(error);
  }
});

// ? Start http server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
