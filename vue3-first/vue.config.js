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
});
