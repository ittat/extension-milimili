# Chrome Extension MiliMili

Chrome 类浏览器插件，快速查阅你关注的up主动态。

目前此插件功能相当单一，初衷是减少被哔哩哔哩生态的依赖，但不希望错过关注的Up主更新内容。

<span>
<img src="/Snipaste_2022-09-27_16-27-27.png" height="250" alt="截图">
</span>

## 获取最新crx安装包

![Release download](https://github.com/ittat/extension-milimili/releases)

## 项目编译

### Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

### Option

* [Visual Studio Code](https://code.visualstudio.com/)

### Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

### Setup

```
npm install
```

## #Import as Visual Studio Code project

...

### Build

```
npm run build
```

### Build in watch mode

#### terminal

```
npm run watch
```

#### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

### Load extension to chrome

Load `dist` directory


