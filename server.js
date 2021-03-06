const config = require("./config");
const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");

const port = config.PORT || 3000;
const dev = config.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      /* Parse request url to get its pathname */
      const parsedUrl = url.parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    });
});
