# Vue 3 + TypeScript + Vite

入门练习项目
名称：燕寻书签

# 项目创建

npm i axios -S

npm i vuex@next -S

npm i vue-router@next -S

npm i sass -S

npm install eslint --save-dev

npm install --save-dev --save-exact prettier

npm i eslint-config-prettier --save-dev

npm i @type/node --save-dev

npm install postcss-px-to-viewport --save-dev //有错，未使用

npm install element-plus --save


# 报错记录
## vite.config.ts

问题：模块"path"只能在使用"allowSyntheticDefaultImports"标志时进行默认导入ts

方法：在tsconfig.node.json文件夹中添加"allowSyntheticDefaultImports": true

## 打包出现的问题

问题：Access to script at ‘file...

方法：1. 搭建服务器放入服务器中 2.下载live Server插件，然后鼠标右键运行即可。 

## JSON.parse

问题：类型“string | null”的参数不能赋给类型“string”的参数。 不能将类型“null”分配给类型“string” ts

方法：JSON.parse(localStorage.getItem("tagInfo") || "")

## 打包

问题：打包文件过大 Some chunks are larger than 500 KiB after minification

方法：
1. 分块
2. 将默认的500kb提高上限

## 工具类，拖拽

问题：Element类型不能for...of遍历

方法：断言为any