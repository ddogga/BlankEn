const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  //vue build시 build된 파일 경로
  outputDir:
    "C:/Users/idonthavecat/Desktop/WorkSpace/toy_project/BlankEn/english/src/main/resources/static",

  //index.html경로
  indexPath:
    "C:/Users/idonthavecat/Desktop/WorkSpace/toy_project/BlankEn/english/src/main/resources/templates/index.html",

  devServer: {
    proxy: {
      "/api": {
        // '/api' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        target: "http://localhost:8081",
        changeOrigin: true, // cross origin 허용
      },
    },
  },
});
