/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/MD.js":
/*!*************************!*\
  !*** ./assets/js/MD.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Markdown)\n/* harmony export */ });\nclass Markdown {\n  constructor(props) {\n    this.parse = props;\n    this.res = [];\n    this.exec();\n  }\n\n  exec() {\n    let res = this.parse.match(/(#+\\s*)|(\\S+\\s+|\\S+|)|\\n/g);\n    res = res.join('');\n    res.split('\\n').forEach(text => {\n      this.res.push(text.trim());\n    });\n    console.log(this.res + '1');\n  }\n\n  parseHTML() {\n    let textArr = [];\n    this.res.forEach(element => {\n      let arr = [];\n\n      if (element.indexOf('#') == 0) {\n        arr = element.match(/(#+\\s(1))|(\\S+)|\\n/g);\n        console.log(arr + 2);\n      } else {\n        arr = element;\n        console.log(arr + 3);\n      }\n\n      if (Array.isArray(arr)) {\n        let num;\n\n        if (arr[0].length > 6) {\n          num = 6;\n        } else {\n          num = arr[0].length;\n        }\n\n        let el = document.createElement('h' + num);\n        el.innerHTML = arr[1];\n        textArr.push(el);\n      } else {\n        let el = document.createElement('p');\n        el.innerHTML = arr;\n        textArr.push(el);\n      }\n    });\n    console.log(textArr + 4);\n    return textArr;\n  }\n\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./assets/js/MD.js?");

/***/ }),

/***/ "./assets/js/Url.js":
/*!**************************!*\
  !*** ./assets/js/Url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Url)\n/* harmony export */ });\nclass Url {\n  constructor(props) {\n    this.props = props;\n    this.json = {};\n    this.keyArr = [];\n    this.strArr = [];\n    this.exec();\n  }\n\n  exec() {\n    if (this.props.constructor.toString().indexOf('Object') != -1) {\n      this.urlMerge();\n    } else {\n      this.urlSplit();\n    }\n  }\n\n  urlSplit() {\n    let str = this.props.substring(this.props.indexOf('?') + 1);\n    this.keyArr = str.split(\"&\");\n    this.keyArr.forEach(item => {\n      let tempArr = item.split('=');\n      this.json[tempArr[0]] = tempArr[1];\n    });\n  }\n\n  urlMerge() {\n    let str;\n\n    for (const key in this.props) {\n      str = key + '=' + this.props[key];\n      this.strArr.push(str);\n    }\n  }\n\n  get(name) {\n    return this.json[name];\n  }\n\n  parse() {\n    return this.strArr.join('&');\n  }\n\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./assets/js/Url.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/articleDetails/articleDetails.js":
/*!**********************************************!*\
  !*** ./src/articleDetails/articleDetails.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/route.js */ \"./src/home/route.js\");\n/* harmony import */ var _assets_js_MD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/MD.js */ \"./assets/js/MD.js\");\n/* harmony import */ var _assets_js_Url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/Url.js */ \"./assets/js/Url.js\");\n\n\n\nlet url = new _assets_js_Url_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.location.search);\nlet url2 = new _assets_js_Url_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  name: 'xiaoming',\n  id: '1'\n});\n\nfunction HTMLparse(str) {\n  let div = document.createElement('div');\n  div.innerHTML = str;\n  return div;\n}\n\nfor (let i = 0; i < _home_route_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\n  if (_home_route_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].id == url.get('id')) {\n    let oMsg = _home_route_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].article;\n    let div = HTMLparse(oMsg);\n    let title = div.querySelector('.title').innerHTML;\n    document.querySelector('.content_text').querySelector('h1').innerHTML = title;\n    let content = div.querySelector('.content').innerHTML;\n    document.querySelector('.article').innerHTML = content;\n  } else {\n    continue;\n  }\n}\n\nlet el = document.querySelector('.article').innerHTML;\nconsole.log(el);\nlet md = new _assets_js_MD_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el);\nlet div = document.createElement('div');\nmd.parseHTML().forEach(element => {\n  div.append(element);\n});\ndocument.querySelector('.article').innerHTML = div.innerHTML;\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/articleDetails/articleDetails.js?");

/***/ }),

/***/ "./src/home/route.js":
/*!***************************!*\
  !*** ./src/home/route.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _article_1_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article/1.天动万象.html */ \"./src/article/1.天动万象.html\");\n/* harmony import */ var _article_2_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article/2.忽悠着你.html */ \"./src/article/2.忽悠着你.html\");\n/* harmony import */ var _article_3_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/3.男拳.html */ \"./src/article/3.男拳.html\");\n/* harmony import */ var _article_4_1_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article/4.1.html */ \"./src/article/4.1.html\");\n/* harmony import */ var _article_5_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/5.周记.html */ \"./src/article/5.周记.html\");\n\n\n\n\n\n\nfunction HTMLparse(str) {\n  let div = document.createElement('div');\n  div.innerHTML = str;\n  return div.querySelector('template').innerHTML;\n}\n\nlet article_content1 = HTMLparse(_article_1_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nlet article_content2 = HTMLparse(_article_2_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nlet article_content3 = HTMLparse(_article_3_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nlet article_content4 = HTMLparse(_article_4_1_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nlet article_content5 = HTMLparse(_article_5_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 1,\n  article: article_content1\n}, {\n  id: 2,\n  article: article_content2\n}, {\n  id: 3,\n  article: article_content3\n}, {\n  id: 4,\n  article: article_content4\n}, {\n  id: 5,\n  article: article_content5\n}]);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/home/route.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/articleDetails/articleDetails.less":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/articleDetails/articleDetails.less ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n}\\n#warp {\\n  display: flex;\\n  min-height: 100vh;\\n  justify-content: center;\\n  background-color: #f9f9f9;\\n}\\n#warp .header {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  overflow: hidden;\\n  background-color: #fff;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\\n  z-index: 100;\\n  width: 100%;\\n}\\n#warp .header .head {\\n  height: 56px;\\n  min-width: 1200px;\\n  max-width: 1440px;\\n  margin: 0 auto;\\n  display: flex;\\n  align-items: center;\\n}\\n#warp .header .head .logo {\\n  margin: auto 30px;\\n}\\n#warp .header .head .nav {\\n  margin-left: 6%;\\n  width: 55%;\\n  display: flex;\\n  align-items: center;\\n}\\n#warp .header .head .nav > span {\\n  padding: 0 25px;\\n}\\n#warp .header .head .nav .ipt-box {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  width: 160px;\\n  height: 36px;\\n  font-size: 20px;\\n  border-radius: 18px;\\n  background-color: #f2f2f2;\\n}\\n#warp .header .head .nav .ipt-box input {\\n  width: 100px;\\n  outline: none;\\n  border: none;\\n  background-color: #f2f2f2;\\n}\\n#warp .header .head .right-nav {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n#warp .header .head .right-nav .Aa {\\n  margin: 0 8px;\\n}\\n#warp .header .head .right-nav img {\\n  height: 20px;\\n}\\n#warp .header .head .right-nav .login {\\n  padding: 0 24px;\\n}\\n#warp .header .head .right-nav .register {\\n  color: #ec7259;\\n  border: 1px solid #ec7259;\\n  border-color: #ec7259;\\n  cursor: pointer;\\n  border-radius: 50px;\\n  padding: 8px 24px;\\n  margin-left: 8px;\\n}\\n#warp .header .head .right-nav .write {\\n  color: #fff;\\n  background-color: #ec7259;\\n  border-color: #ec7259;\\n  cursor: pointer;\\n  border-radius: 50px;\\n  margin-left: 8px;\\n  padding: 8px 24px;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n#warp .content {\\n  margin-top: 4.5%;\\n  min-width: 1002px;\\n  width: 66%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#warp .content .content_text {\\n  width: 66.5%;\\n  border-radius: 5px;\\n  background-color: #fff;\\n  padding: 32px;\\n}\\n#warp .content .content_text h1 {\\n  font-size: 30px;\\n  margin-bottom: 15px;\\n}\\n#warp .content .content_text .character {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 32px;\\n}\\n#warp .content .content_text .character img {\\n  height: 50px;\\n  width: 50px;\\n  border-radius: 50%;\\n}\\n#warp .content .content_text .character .character_information {\\n  margin-left: 8px;\\n}\\n#warp .content .content_text .character .character_information div:nth-of-type(1) {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 6px;\\n}\\n#warp .content .content_text .character .character_information div:nth-of-type(1) .character_name {\\n  font-size: 17px;\\n  margin-right: 8px;\\n}\\n#warp .content .content_text .character .character_information div:nth-of-type(1) img {\\n  width: 16px;\\n  height: 16px;\\n}\\n#warp .content .content_text .character .character_information div:nth-of-type(2) {\\n  color: #969696;\\n  font-size: 13px;\\n}\\n#warp .content .content_text .character .character_information div:nth-of-type(2) .mar_r {\\n  margin-right: 10px;\\n}\\n#warp .content .content_text .article p {\\n  margin-bottom: 20px;\\n}\\n#warp .content .sidebar {\\n  width: 26%;\\n  max-height: 660px;\\n}\\n#warp .content .sidebar .personal {\\n  background-color: #fff;\\n  border-radius: 5px;\\n  padding: 16px;\\n  margin-bottom: 10px;\\n}\\n#warp .content .sidebar .personal .recommend_title {\\n  display: flex;\\n  align-items: center;\\n}\\n#warp .content .sidebar .personal .recommend_title .orange {\\n  height: 20px;\\n  width: 4px;\\n  background-color: orange;\\n  margin-right: 5px ;\\n}\\n#warp .content .sidebar .personal .sidebar_character {\\n  display: flex;\\n  align-items: center;\\n}\\n#warp .content .sidebar .personal .sidebar_character img {\\n  height: 45px;\\n  width: 45px;\\n}\\n#warp .content .sidebar .personal .sidebar_character .character_information {\\n  margin-left: 4px;\\n}\\n#warp .content .sidebar .personal .sidebar_character .character_information div:nth-of-type(1) {\\n  margin-bottom: 6px;\\n}\\n#warp .content .sidebar .personal .sidebar_character .character_information div:nth-of-type(1) .character_name {\\n  font-size: 17px;\\n  margin-right: 8px;\\n}\\n#warp .content .sidebar .personal .sidebar_character .character_information div:nth-of-type(2) {\\n  color: #969696;\\n  font-size: 13px;\\n}\\n#warp .content .sidebar .personal .sidebar_character .character_information img {\\n  width: 16px;\\n  height: 16px;\\n}\\n#warp .content .sidebar .personal hr {\\n  margin: 16px 0;\\n}\\n#warp .content .sidebar .personal .recommend {\\n  margin-top: 10px;\\n}\\n#warp .content .sidebar .personal .recommend div:nth-of-type(1) {\\n  margin-top: 4px;\\n  color: #969696;\\n  font-size: 12px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/articleDetails/articleDetails.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/article/1.天动万象.html":
/*!*********************************!*\
  !*** ./src/article/1.天动万象.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <span class=\\\"title\\\">天动万象𒆙</span>\\r\\n    <span class=\\\"content\\\">\\r\\n        朋友，假使有一日不得不同你相别，你在我的记忆中也会如黄金般闪耀。\\r\\n        见证者，为见证而来。铭记者，因铭记而生。\\r\\n        旅程总有一天会迎来终点，不必匆忙。\\r\\n        此世群魔诸神并起，我虽无意逐鹿，却知苍生苦楚，只愿荡涤四方，护得浮世一隅。\\r\\n        一切力量皆有其代价,一千种权力伴随着一千种责任。\\r\\n        在你通向那个人的路上，也许会有更多困难，但只要你坚信这条路通往『正确』，一切就有意义。\\r\\n        我是人的神明,不论身份如何变化,都会以我这双眼睛见证属于人的历史。\\r\\n        我在心里数了他千万个缺点，却敌不过看他那一眼。\\r\\n        欲买桂花同载酒 只可惜故人 何日再见呢。\\r\\n    </span>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/1.%E5%A4%A9%E5%8A%A8%E4%B8%87%E8%B1%A1.html?");

/***/ }),

/***/ "./src/article/2.忽悠着你.html":
/*!*********************************!*\
  !*** ./src/article/2.忽悠着你.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <span class=\\\"title\\\">忽悠着你</span>\\r\\n    <span class=\\\"content\\\">\\r\\n    美酒，微风……这样的时刻，总会让我忍不住想起……想起那首，从他那里听来的歌。\\r\\n    飞翔吧，飞翔吧。就像飞鸟那样。代我看看这个世界……带我飞到，高天之上。\\r\\n    我已经有过一次旅行。所以，你也要像我一样抵达终点，才能在自己的眼中，留下这个世界的沉淀。\\r\\n    我们终将重逢。\\r\\n    拉钩拉钩不许变，变了丢他去冰川。冰川冷，雪原寒，撒谎的舌头全冻烂！\\r\\n    孩童时期的梦是最易碎的东西。哪怕放着不管，也总会有一天自己碎掉。\\r\\n    所以，一定要有人来保护才行吧？许下的承诺就该好好遵守，做错了事就该好好道歉。给予他的梦，就该好好呵护到最后……这才是身为家人该有的样子，就是这样。\\r\\n    那就说明，成为往生堂的堂主，一定是非常正确而且绝对不会留下遗憾的事。\\r\\n    轻盈的风，偶尔也会变得沉重。\\r\\n    几千年岁月的冲刷，哪怕是岩石……也会偶尔感到疲惫。\\r\\n    欲买桂花同载酒，只可惜故人……何日再见呢？\\r\\n    看似不变的磐石、看似不变的世界与我……或许也会在某一天消失。所以，旅行者，我想到了你。\\r\\n    你是远渡重天、跨越星海之人。把历史刻在你的记忆里，就可以在未来某日，随你一同前往别的世界。\\r\\n    原来这就是你与我同行的理由，任重而道远啊。\\r\\n    璃月港的神迹，从此又少了一分。\\r\\n    谁也没有见过风，更别说我和你了。谁也没有见过爱情，直到有束花抛向了自己。\\r\\n    </span>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/2.%E5%BF%BD%E6%82%A0%E7%9D%80%E4%BD%A0.html?");

/***/ }),

/***/ "./src/article/3.男拳.html":
/*!*******************************!*\
  !*** ./src/article/3.男拳.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <span class=\\\"title\\\">如何看待知乎上的男拳</span>\\r\\n    <span class=\\\"content\\\">\\r\\n    我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪\\r\\n    满地找牙关键老实人还不知道做错了啥明\\r\\n    </span>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/3.%E7%94%B7%E6%8B%B3.html?");

/***/ }),

/***/ "./src/article/4.1.html":
/*!******************************!*\
  !*** ./src/article/4.1.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <span class=\\\"title\\\">天动万象𒆙</span>\\r\\n    <span class=\\\"content\\\">\\r\\n        # helloworld\\r\\n        ##  我是h2\\r\\n        我是 \\r\\n        艺术大#师 ihxaxa\\r\\n        ### 我是h3\\r\\n        #### 我是h4\\r\\n        ##### 我是h5\\r\\n        ###### 我是h6\\r\\n        ############# 我是黄果树瀑布f\\r\\n        我是小明\\r\\n    </span>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/4.1.html?");

/***/ }),

/***/ "./src/article/5.周记.html":
/*!*******************************!*\
  !*** ./src/article/5.周记.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <span class=\\\"title\\\">老苏的周记</span>\\r\\n    <span class=\\\"content\\\">\\r\\n        # 这周学了一些正则的语法\\r\\n        对正则的语法有了一些浅薄的了解。\\r\\n        明白了正则是用来匹配字符串的，以及一些正则不可以匹配的特殊字符也有了一些了解。\\r\\n        虽然有一些无理的要求不太会写，但是一些简单的匹配还是凑凑合合。\\r\\n        # 对于class类的应用场景和如何使用\\r\\n        知道了类中一个方法是一个逻辑。\\r\\n        明白了一些静态方法和属性的使用。\\r\\n        每个class都要有复用性，解耦和扩展性。\\r\\n    </span>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/5.%E5%91%A8%E8%AE%B0.html?");

/***/ }),

/***/ "./src/articleDetails/articleDetails.less":
/*!************************************************!*\
  !*** ./src/articleDetails/articleDetails.less ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_articleDetails_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./articleDetails.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/articleDetails/articleDetails.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_articleDetails_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_articleDetails_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_articleDetails_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_articleDetails_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/articleDetails/articleDetails.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/articleDetails/articleDetails.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/articleDetails/articleDetails.less");
/******/ 	
/******/ })()
;