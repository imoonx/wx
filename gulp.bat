echo 开始执行

echo 初始化生成package.json
call npm init

echo 安装全局gulp
call npm install -g gulp

echo 安装css压缩插件
call npm install gulp-clean-css --save-dev

echo 安装js压缩插件

call npm install gulp-uglify --save-dev

echo 安装js合并插件

call npm install gulp-concat --save-dev

echo 安装重命名插件

call npm install  gulp-rename --save-dev

echo 安装js代码检测插件

call npm install gulp-jshint --save-dev


echo 执行完成，按任意键结束
pause

exit