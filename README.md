# vue-cli2 全面配置

npm run  参数说明
baseurl 默认值 "http://localhost:8080/"  baseurl 根路径,如果不显示设置默认获取当前服务器地址
baseenv 默认值 "mock"            代理环境
baseproject 默认值 "project1"    项目名称 (此处值对应view/login/文件下文件名称)

示例
npm run dev --baseurl=http://localhost.dev:9000/ --baseenv=api --baseproject=project2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev (默认开启dev模式mock环境,即 baseurl="http://localhost:8080/" baseenv="mock") 


显示指定开发环境

npm run dev --baseurl=http://localhost.dev/ --baseenv=api

显示指定生产环境

npm run dev --baseurl=http://localhost.pro/ --baseenv=api
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


文件结构
