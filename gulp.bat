:: 初始化生成package.json
call npm init
:: 安装全局gulp
call npm install -g gulp
:: css压缩插件
call npm install gulp-clean-css --save-dev
:: js压缩插件
call npm install gulp-uglify --save-dev
:: js合并插件
call npm install gulp-concat --save-dev
:: 重命名插件
call npm install  gulp-rename --save-dev
:: js代码插件
call npm install gulp-jshint --save-dev
