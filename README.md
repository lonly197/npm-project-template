# npm项目脚手架

[![NPM version](https://img.shields.io/npm/v/npm-project-template.svg?style=flat-square)](http://badge.fury.io/js/npm-project-template)
[![Build Status](https://travis-ci.org/lonly197/npm-project-template.svg?branch=master)](https://travis-ci.org/lonly197/npm-project-template)
[![Dependencies Status](https://david-dm.org/lonly197/npm-project-template.svg)](https://david-dm.org/lonly197/npm-project-template)
[![codecov](https://codecov.io/gh/lonly197/npm-project-template/branch/master/graph/badge.svg)](https://codecov.io/gh/lonly197/npm-project-template)
[![npm](https://img.shields.io/npm/dm/npm-project-template.svg?maxAge=2592000)](https://www.npmjs.com/package/npm-project-template)
[![License](https://img.shields.io/npm/l/npm-project-template.svg?maxAge=2592000?style=plastic)](https://github.com/lonly197/zmxy/blob/master/LICENSE)


辅助在Github上从零快速开始一个公开的npm项目, 内置以下功能:

- 源代码可以使用ES2017，`npm publish`时通过babel编译为ES2015, 最低支持node.js v6.0.0
- 代码提交前自动运行`npm run lint`, 基于[ESLint](http://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), 不规范的代码将无法提交
- 基于[AVA](https://github.com/avajs/ava)实现单元测试
- 基于[TravisCI](https://travis-ci.org/)进行持续集成
- CI通过后基于[Codecov](https://codecov.io/)自动生成代码覆盖率报告
- 通过Github的release功能, 自动打包发布到npm

## 使用方法

**1.** 在Github建立一个空repository, 如`myproject`, 并clone到本地

```
cd myproject && wget https://github.com/lonly197/npm-project-template/archive/master.tar.gz -O master.tar.gz && tar xvf master.tar.gz --strip 1 && rm master.tar.gz
```

**2.** 在TravisCI网站中点击"Add New Repository", 找到对应github项目并开启


**3.** 实现TravisCI完成后发布到npm

安装travis ci命令行

```
gem install travis
```

运行`travis setup npm`， 根据提示完成配置， 依次填写npm注册邮箱， NPM api key等信息

其中NPM api key可运行`npm login`登录npm后, 在`~/.npmrc`中找到形如

```
//registry.npmjs.org/:_authToken=XXX
```

其中XXX部分就是api key

**4.** 修改`package.json`内项目信息, push代码到Github

**5.** 通过`git tag -a`和`git push --tags`添加一个tag，或者直接使用Github的release功能，完成一次发布
