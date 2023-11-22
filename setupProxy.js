const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "hhttps://dapi.kakao.com/v2/maps",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", //url intialize
      },
    })
  );
};
