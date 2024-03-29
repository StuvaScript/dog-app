/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/* ---------------------------------------- */
/* My additions at the very bottom */
/* ---------------------------------------- */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}

/* ---------------------------------------- */
/* Stu's Addition */

/* makes sizing simpler */

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* no margins or padding */

* {
  margin: 0;
  padding: 0;
}
/* ---------------------------------------- */
`, "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/* ---------------------------------------- */\n/* My additions at the very bottom */\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n\n/* ---------------------------------------- */\n/* Stu's Addition */\n\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* no margins or padding */\n\n* {\n  margin: 0;\n  padding: 0;\n}\n/* ---------------------------------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --dark-blue: #264653;
  --blue-green: #2fac9e;
  --yellow: #e9c46a;
  --orange: #f4a261;
  --red: #f57656;

  --main-font: Arial, Helvetica, sans-serif;
}

body {
  font-family: var(--main-font);

  display: grid;
  grid-template-rows: 10vh minmax(80vh, 100%) 10vh;
}

/*? **\`\` Header */
/* ***************************************************** */
header {
  background: var(--blue-green);

  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    cursor: pointer;
    width: clamp(50px, 17vw, 70px);
  }
}

/*? **\`\` Main content between header and footer */
/* ***************************************************** */
main {
  height: 100%;
  background: var(--blue-green);

  display: grid;
  grid-template-rows: auto 1fr;
}

/*? **\`\` Form */
/* ***************************************************** */
#form-back-wrapper {
  display: grid;
  gap: 10px;
}

form {
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  input {
    padding: 10px 60px 10px 30px;
    font-size: 1.25rem;
    border-radius: 50px;
    border: none;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    width: clamp(min(90vw, 350px), 60vw, 400px);
  }

  /*! **\`\` This is the class toggled by JS when a breed isn't found */
  .warn {
    border: 2px solid #a80000;
  }

  .warn::placeholder {
    color: #a80000;
  }
  /*! ******************************************************* */

  input:focus {
    outline-color: var(--orange);
  }

  #submit-button {
    position: relative;
    right: -2px;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    padding: 10px;
    background: var(--orange);
    border-radius: 50%;
    border: none;
    width: 35px;
    height: 35px;
    margin-right: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 25px;
      width: 25px;
    }
  }

  #submit-button:hover {
    background: var(--red);
  }
}

/*? **\`\` Welcome page paragraph */
/* ***************************************************** */
#welcome-wrapper {
  align-self: center;
  justify-self: center;
  width: clamp(min(90vw, 350px), 60vw, 900px);
  background: var(--orange);
  padding: 20px;
  box-shadow:
    2px 2px 10px #3339,
    10px 10px 20px #3337;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    text-align: center;
  }

  p {
    font-size: clamp(1rem, 5vw, 1.25rem);
  }
}

/*? **\`\` Searched breeds results */
/* ***************************************************** */
#list-wrapper {
  padding: 20px 10px 20px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto minmax(1fr, auto);
  gap: 10px;

  .breed-wrapper {
    cursor: pointer;
    margin: 20px 0px;
    /*! **\`\` This 'grid-row: span 2' is important for the subgrid to work */
    grid-row: span 2;

    display: grid;
    grid-template-rows: subgrid;
    justify-items: center;
    gap: 10px;

    .breed-name {
      text-align: center;
      font-weight: bold;
      font-size: 1.25rem;
      align-self: end;
    }

    .breed-image {
      display: grid;
      justify-items: center;
    }

    .breed-image > img {
      box-shadow:
        2px 2px 10px #3339,
        10px 10px 20px #3337;
      border-radius: 10px;
      width: max(250px, 75%);
    }
  }
}

/*? **\`\` Clicked single breed */
/* ***************************************************** */
#single-breed-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;

  #info-wrapper {
    display: grid;
    justify-items: center;
    gap: 5px;

    > div {
      font-size: clamp(1rem, 5vw, 1.25rem);
    }

    > * {
      text-align: center;
    }
  }

  #image-wrapper {
    padding: 20px 10px 20px;

    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;

    .info-image {
      margin: 20px 0px;

      display: grid;
      justify-items: center;
    }

    .info-image > img {
      box-shadow:
        2px 2px 10px #3339,
        10px 10px 20px #3337;
      border-radius: 10px;
      width: max(250px, 75%);
    }
  }
}

/*? **\`\` Back button */
/* ***************************************************** */
#back-button {
  box-shadow: 2px 2px 10px #3339;
  font-size: 2rem;
  background: var(--orange);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  justify-self: center;
}

#back-button:hover {
  background: var(--red);
}

/*? **\`\` Footer */
/* ***************************************************** */
footer {
  background: var(--red);
  text-align: center;
  font-size: clamp(0.5rem, 5vw, 1.25rem);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

footer a:link,
footer a:visited,
footer a:hover,
footer a:active {
  color: initial;
}

/*? **\`\` Loading screen */
/* ***************************************************** */
#loading-wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  #loading-image {
    width: 75vw;
    max-width: 400px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --dark-blue: #264653;\n  --blue-green: #2fac9e;\n  --yellow: #e9c46a;\n  --orange: #f4a261;\n  --red: #f57656;\n\n  --main-font: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  font-family: var(--main-font);\n\n  display: grid;\n  grid-template-rows: 10vh minmax(80vh, 100%) 10vh;\n}\n\n/*? **`` Header */\n/* ***************************************************** */\nheader {\n  background: var(--blue-green);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  #logo {\n    cursor: pointer;\n    width: clamp(50px, 17vw, 70px);\n  }\n}\n\n/*? **`` Main content between header and footer */\n/* ***************************************************** */\nmain {\n  height: 100%;\n  background: var(--blue-green);\n\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n\n/*? **`` Form */\n/* ***************************************************** */\n#form-back-wrapper {\n  display: grid;\n  gap: 10px;\n}\n\nform {\n  justify-self: center;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n\n  input {\n    padding: 10px 60px 10px 30px;\n    font-size: 1.25rem;\n    border-radius: 50px;\n    border: none;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    width: clamp(min(90vw, 350px), 60vw, 400px);\n  }\n\n  /*! **`` This is the class toggled by JS when a breed isn't found */\n  .warn {\n    border: 2px solid #a80000;\n  }\n\n  .warn::placeholder {\n    color: #a80000;\n  }\n  /*! ******************************************************* */\n\n  input:focus {\n    outline-color: var(--orange);\n  }\n\n  #submit-button {\n    position: relative;\n    right: -2px;\n    grid-column: 2 / -1;\n    grid-row: 1 / 2;\n    padding: 10px;\n    background: var(--orange);\n    border-radius: 50%;\n    border: none;\n    width: 35px;\n    height: 35px;\n    margin-right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      height: 25px;\n      width: 25px;\n    }\n  }\n\n  #submit-button:hover {\n    background: var(--red);\n  }\n}\n\n/*? **`` Welcome page paragraph */\n/* ***************************************************** */\n#welcome-wrapper {\n  align-self: center;\n  justify-self: center;\n  width: clamp(min(90vw, 350px), 60vw, 900px);\n  background: var(--orange);\n  padding: 20px;\n  box-shadow:\n    2px 2px 10px #3339,\n    10px 10px 20px #3337;\n  border-radius: 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  h1 {\n    text-align: center;\n  }\n\n  p {\n    font-size: clamp(1rem, 5vw, 1.25rem);\n  }\n}\n\n/*? **`` Searched breeds results */\n/* ***************************************************** */\n#list-wrapper {\n  padding: 20px 10px 20px;\n\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: auto minmax(1fr, auto);\n  gap: 10px;\n\n  .breed-wrapper {\n    cursor: pointer;\n    margin: 20px 0px;\n    /*! **`` This 'grid-row: span 2' is important for the subgrid to work */\n    grid-row: span 2;\n\n    display: grid;\n    grid-template-rows: subgrid;\n    justify-items: center;\n    gap: 10px;\n\n    .breed-name {\n      text-align: center;\n      font-weight: bold;\n      font-size: 1.25rem;\n      align-self: end;\n    }\n\n    .breed-image {\n      display: grid;\n      justify-items: center;\n    }\n\n    .breed-image > img {\n      box-shadow:\n        2px 2px 10px #3339,\n        10px 10px 20px #3337;\n      border-radius: 10px;\n      width: max(250px, 75%);\n    }\n  }\n}\n\n/*? **`` Clicked single breed */\n/* ***************************************************** */\n#single-breed-wrapper {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n\n  #info-wrapper {\n    display: grid;\n    justify-items: center;\n    gap: 5px;\n\n    > div {\n      font-size: clamp(1rem, 5vw, 1.25rem);\n    }\n\n    > * {\n      text-align: center;\n    }\n  }\n\n  #image-wrapper {\n    padding: 20px 10px 20px;\n\n    display: grid;\n    justify-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 10px;\n\n    .info-image {\n      margin: 20px 0px;\n\n      display: grid;\n      justify-items: center;\n    }\n\n    .info-image > img {\n      box-shadow:\n        2px 2px 10px #3339,\n        10px 10px 20px #3337;\n      border-radius: 10px;\n      width: max(250px, 75%);\n    }\n  }\n}\n\n/*? **`` Back button */\n/* ***************************************************** */\n#back-button {\n  box-shadow: 2px 2px 10px #3339;\n  font-size: 2rem;\n  background: var(--orange);\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  justify-self: center;\n}\n\n#back-button:hover {\n  background: var(--red);\n}\n\n/*? **`` Footer */\n/* ***************************************************** */\nfooter {\n  background: var(--red);\n  text-align: center;\n  font-size: clamp(0.5rem, 5vw, 1.25rem);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\nfooter a:link,\nfooter a:visited,\nfooter a:hover,\nfooter a:active {\n  color: initial;\n}\n\n/*? **`` Loading screen */\n/* ***************************************************** */\n#loading-wrapper {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  place-items: center;\n\n  #loading-image {\n    width: 75vw;\n    max-width: 400px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dom-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBackButton: () => (/* binding */ displayBackButton),
/* harmony export */   displayBreeds: () => (/* binding */ displayBreeds),
/* harmony export */   displayFavicon: () => (/* binding */ displayFavicon),
/* harmony export */   displayInfo: () => (/* binding */ displayInfo),
/* harmony export */   displayLoadingImage: () => (/* binding */ displayLoadingImage),
/* harmony export */   displayLogo: () => (/* binding */ displayLogo),
/* harmony export */   displaySearchIcon: () => (/* binding */ displaySearchIcon),
/* harmony export */   introPage: () => (/* binding */ introPage),
/* harmony export */   removeDogs: () => (/* binding */ removeDogs),
/* harmony export */   removeLoadingScreen: () => (/* binding */ removeLoadingScreen),
/* harmony export */   toggleBreedNotFoundMessage: () => (/* binding */ toggleBreedNotFoundMessage)
/* harmony export */ });
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_dog_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dog-logo.png */ "./src/images/dog-logo.png");
/* harmony import */ var _images_dog_running_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/dog-running.gif */ "./src/images/dog-running.gif");






const main = document.querySelector('main');

//? **`` Removes all the children under the 'main' element except the first element (the 'search form')
function removeDogs() {
  main.replaceChildren(main.firstElementChild);
  if (document.querySelector('#back-button')) {
    document.querySelector('#back-button').remove();
  }
}

//* **`` The main breed selector page
//* ************************************************************************************
//? **`` Makes a list of all the dog breed names that appeared from the search input and displays them
function displayBreeds(newBreedArray) {
  const listWrapper = document.createElement('div');
  listWrapper.setAttribute('id', 'list-wrapper');

  //? **`` Creates a div for each breed, adds a class name and the breed ID, and appends it to the wrapper
  newBreedArray.forEach((breed) => {
    //? **`` If theres no image, it returns and won't display anything.
    if (!breed.image) {
      return;
    }
    const breedWrapper = document.createElement('div');
    breedWrapper.classList.add('breed-wrapper');
    breedWrapper.setAttribute('data-breed-ID', `${breed.id}`);
    breedName(breed, breedWrapper);
    breedImage(breed, breedWrapper);

    listWrapper.append(breedWrapper);
  });
  main.append(listWrapper);
}

//? **` Creates a div, assigns the breed's name and class name to the div
function breedName(breed, breedWrapper) {
  const breedName = document.createElement('div');
  breedName.classList.add('breed-name');
  breedName.innerText = breed.name;
  breedWrapper.append(breedName);
}
//? **` Creates a div, assigns the breed's class name to the div. Creates an img element and attaches the breed's image to it.
function breedImage(breed, breedWrapper) {
  //? **`` Creates the div
  const breedImage = document.createElement('div');
  breedImage.classList.add('breed-image');
  //? **`` Creates the image
  const img = document.createElement('img');
  img.setAttribute('src', breed.image);
  img.setAttribute('alt', `Picture of ${breed.name} breed`);
  breedImage.append(img);
  breedWrapper.append(breedImage);
}

//* **`` The breed info page
//* ************************************************************************************

//? **`` Takes the data and displays it according to the user's breed selection
function displayInfo(returnedInfo) {
  const singleBreedWrapper = document.createElement('div');
  singleBreedWrapper.setAttribute('id', 'single-breed-wrapper');
  main.append(singleBreedWrapper);

  //? **`` Creates the info wrapper area
  const infoWrapper = document.createElement('div');
  infoWrapper.setAttribute('id', 'info-wrapper');
  singleBreedWrapper.append(infoWrapper);

  //? **`` This area contains conditionals. If any info is empty or undefined, it doesn't get displayed
  const bredFor = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].bred_for === '' ||
      returnedInfo[0].breeds[0].bred_for === undefined
    )
  ) {
    bredFor.innerText = `Bred for: ${returnedInfo[0].breeds[0].bred_for}`;
  }

  const breedGroup = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].breed_group === '' ||
      returnedInfo[0].breeds[0].breed_group === undefined
    )
  ) {
    breedGroup.innerText = `Breed group: ${returnedInfo[0].breeds[0].breed_group}`;
  }

  const height = document.createElement('div');
  height.innerText = `Height: ${returnedInfo[0].breeds[0].height.imperial} in, ${returnedInfo[0].breeds[0].height.metric} cm`;

  const weight = document.createElement('div');
  weight.innerText = `Weight: ${returnedInfo[0].breeds[0].weight.imperial} lb, ${returnedInfo[0].breeds[0].weight.metric} kg`;

  const lifeSpan = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].life_span === '' ||
      returnedInfo[0].breeds[0].life_span === undefined
    )
  ) {
    lifeSpan.innerText = `Life span: ${returnedInfo[0].breeds[0].life_span}`;
  }

  const name = document.createElement('h1');
  name.innerText = `${returnedInfo[0].breeds[0].name}`;

  const temperament = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].temperament === '' ||
      returnedInfo[0].breeds[0].temperament === undefined
    )
  ) {
    temperament.innerText = `Temperament: ${returnedInfo[0].breeds[0].temperament}`;
  }

  infoWrapper.append(
    name,
    breedGroup,
    bredFor,
    height,
    weight,
    lifeSpan,
    temperament,
  );

  //? **`` Creates the image wrapper area
  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', 'image-wrapper');
  singleBreedWrapper.append(imageWrapper);

  returnedInfo.forEach((item) => {
    const infoImage = document.createElement('div');
    infoImage.classList.add('info-image');
    const img = document.createElement('img');
    img.setAttribute('src', item.url);
    img.setAttribute('alt', `Picture of ${item.breeds[0].name} breed`);
    infoImage.append(img);
    imageWrapper.append(infoImage);
  });
}

//* **`` Other functions
//* ************************************************************************************

//? **`` The initial greeting for the app
function introPage() {
  const welcomeWrapper = document.createElement('div');
  welcomeWrapper.setAttribute('id', 'welcome-wrapper');

  const h1 = document.createElement('h1');
  h1.innerText = 'Welcome to the Dog App!';

  const para = document.createElement('p');
  para.innerText =
    'Doggo ipsum pupperino pupper heckin floof boop bamboozle noods zoomies yapper nuggs chonky walkies pats boop awoo derp fren woofer gib gib toe beans teef noods snoot heck mahm loaf smol cloud floofer cronch snoot yapper bork bamboozle derp chonk sploot henlo pats long boi sleppy fluffer tippy taps danger noodle hooman blop.';

  welcomeWrapper.append(h1, para);

  main.append(welcomeWrapper);
}

//? **`` Creates a back button, sets a data attribute with the location where the 'back button' is currently at.
function displayBackButton(location) {
  const formBackWrapper = document.querySelector('#form-back-wrapper');

  const goBack = document.createElement('div');
  goBack.setAttribute('id', 'back-button');
  goBack.setAttribute('data-location', `${location}`);
  goBack.innerText = 'Go back';
  formBackWrapper.append(goBack);
}

//? **`` Displays the search icon
function displaySearchIcon() {
  document.querySelector('#submit-button img').setAttribute('src', _images_search_png__WEBPACK_IMPORTED_MODULE_0__);
}

//? **`` Displays the logo
function displayLogo() {
  document.querySelector('header img').setAttribute('src', _images_dog_logo_png__WEBPACK_IMPORTED_MODULE_1__);
}

//? **`` Displays the favicon
function displayFavicon() {
  document.querySelector('link[rel="icon"]').setAttribute('href', _images_dog_logo_png__WEBPACK_IMPORTED_MODULE_1__);
}

//? **`` When no breed is found after a search, this changes the input field placeholder text, colors the input border, adds a click event listener to the input field to return everything back to normal when the user tries to search again.
function toggleBreedNotFoundMessage() {
  const searchInput = document.querySelector('#search-input');

  searchInput.placeholder = 'No breeds found!';
  searchInput.classList.add('warn');

  searchInput.addEventListener('click', () => {
    searchInput.placeholder = 'Search breeds...';
    searchInput.classList.remove('warn');
  });
}

//? **`` This creates the loading screen image and the div that wraps it.
function displayLoadingImage() {
  const div = document.createElement('div');
  div.setAttribute('id', 'loading-wrapper');

  const img = document.createElement('img');
  img.setAttribute('id', 'loading-image');
  img.setAttribute('src', _images_dog_running_gif__WEBPACK_IMPORTED_MODULE_2__);
  img.setAttribute('alt', 'Loading screen image');
  div.append(img);

  document.querySelector('body').prepend(div);
}

//? **`` This removes the loading screen
function removeLoadingScreen() {
  document.querySelector('#loading-wrapper').remove();
}


/***/ }),

/***/ "./src/modules/event-handlers.js":
/*!***************************************!*\
  !*** ./src/modules/event-handlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickLogoLogic: () => (/* binding */ clickLogoLogic),
/* harmony export */   searchBreedsLogic: () => (/* binding */ searchBreedsLogic)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");





//? **`` This listens for the search submit, waits for the function that fetches the data, and displays the appropriate data
function searchBreedsLogic() {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputField = document.querySelector('#search-input');
    if (inputField.value === '') {
      return;
    }
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeDogs)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayLoadingImage)();
    const returnedBreeds = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.searchForBreed)(inputField.value);
    inputField.value = '';
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeLoadingScreen)();
    if (returnedBreeds.length === 0) {
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.toggleBreedNotFoundMessage)();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.introPage)();
      return;
    }
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBackButton)('breed-select');
    const newBreedArray = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.buildBreedArray)(returnedBreeds);
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBreeds)(newBreedArray);
    clickBackButtonLogic();
    navigateToBreedInfoPageLogic(newBreedArray);
  });
}

//? **`` Adds a listener onto the breed-wrappers and displays the breed info when clicked. Also takes the newBreedArray as an argument and feeds that to the back button logic so navigating back is done with stored data so you don't need to fetch data again.
function navigateToBreedInfoPageLogic(newBreedArray) {
  [...document.querySelectorAll('.breed-wrapper')].forEach((breed) => {
    breed.addEventListener('click', async function (e) {
      const breedID = this.attributes['data-breed-id'].value;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeDogs)();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayLoadingImage)();
      const returnedInfo = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.fetchBreedImagesAndInfo)(breedID);
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeLoadingScreen)();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBackButton)('breed-info');
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayInfo)(returnedInfo);
      clickBackButtonLogic(newBreedArray);
    });
  });
}

//? **`` When clicking the logo, it acts as a 'home' button returning you to the main screen
function clickLogoLogic() {
  const logo = document.querySelector('#logo');

  logo.addEventListener('click', () => {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeDogs)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.introPage)();
  });
}

//? **`` The logic to the back buttons that reads the 'data-location' html attribute to determine what logic to run. Takes the 'newBreedArray' data as an argument so it can populate the previous page off stored data as opposed to fetching data again.
function clickBackButtonLogic(newBreedArray) {
  const backBtn = document.querySelector('#back-button');

  backBtn.addEventListener('click', function () {
    //? **`` This is the back button logic when you are at the 'breed select' page
    if (this.attributes['data-location'].value === 'breed-select') {
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeDogs)();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.introPage)();
    }

    //? **`` This is the back button logic when you are at the 'breed info' page
    if (this.attributes['data-location'].value === 'breed-info') {
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeDogs)();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBackButton)('breed-select');
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBreeds)(newBreedArray);
      clickBackButtonLogic();
      navigateToBreedInfoPageLogic(newBreedArray);
    }
  });
}


/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBreedArray: () => (/* binding */ buildBreedArray),
/* harmony export */   fetchBreedImagesAndInfo: () => (/* binding */ fetchBreedImagesAndInfo),
/* harmony export */   searchForBreed: () => (/* binding */ searchForBreed)
/* harmony export */ });


const apiKey = {"LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_US","USER":"stu","npm_config_user_agent":"npm/9.6.5 node/v18.12.1 linux x64 workspaces/false","XDG_SEAT":"seat0","XDG_SESSION_TYPE":"x11","GIT_ASKPASS":"/usr/share/code/resources/app/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/stu/.nvm/versions/node/v18.12.1/bin/node","SHLVL":"2","npm_config_noproxy":"","HOME":"/home/stu","CHROME_DESKTOP":"code-url-handler.desktop","OLDPWD":"/home/stu/repos","TERM_PROGRAM_VERSION":"1.86.2","DESKTOP_SESSION":"xubuntu","NVM_BIN":"/home/stu/.nvm/versions/node/v18.12.1/bin","npm_package_json":"/home/stu/repos/dog-app/package.json","NVM_INC":"/home/stu/.nvm/versions/node/v18.12.1/include/node","XDG_SEAT_PATH":"/org/freedesktop/DisplayManager/Seat0","VSCODE_GIT_ASKPASS_MAIN":"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"/usr/share/code/code","npm_config_userconfig":"/home/stu/.npmrc","npm_config_local_prefix":"/home/stu/repos/dog-app","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus","COLORTERM":"truecolor","COLOR":"1","NVM_DIR":"/home/stu/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","QT_QPA_PLATFORMTHEME":"gtk2","LOGNAME":"stu","WINDOWID":"73400323","_":"/home/stu/.nvm/versions/node/v18.12.1/bin/npx","npm_config_prefix":"/home/stu/.nvm/versions/node/v18.12.1","XDG_SESSION_CLASS":"user","CLUTTER_BACKEND":"x11","TERM":"xterm-256color","GTK_OVERLAY_SCROLLING":"0","XDG_SESSION_ID":"c1","npm_config_cache":"/home/stu/.npm","npm_config_node_gyp":"/home/stu/.nvm/versions/node/v18.12.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/stu/repos/dog-app/node_modules/.bin:/home/stu/repos/dog-app/node_modules/.bin:/home/stu/repos/node_modules/.bin:/home/stu/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/stu/.nvm/versions/node/v18.12.1/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/stu/.nvm/versions/node/v18.12.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","SESSION_MANAGER":"local/stu-VirtualBox:@/tmp/.ICE-unix/1405,unix/stu-VirtualBox:/tmp/.ICE-unix/1405","GDM_LANG":"en_US","NODE":"/home/stu/.nvm/versions/node/v18.12.1/bin/node","npm_package_name":"dog-app","XDG_SESSION_PATH":"/org/freedesktop/DisplayManager/Session0","XDG_MENU_PREFIX":"xfce-","XDG_RUNTIME_DIR":"/run/user/1000","GDK_BACKEND":"x11","DISPLAY":":0.0","LANG":"en_US.UTF-8","XDG_CURRENT_DESKTOP":"XFCE","XDG_SESSION_DESKTOP":"xubuntu","XAUTHORITY":"/home/stu/.Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","VSCODE_GIT_IPC_HANDLE":"/run/user/1000/vscode-git-5f5787cfe4.sock","TERM_PROGRAM":"vscode","npm_lifecycle_script":"webpack","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","XDG_GREETER_DATA_DIR":"/var/lib/lightdm-data/stu","ORIGINAL_XDG_CURRENT_DESKTOP":"XFCE","SHELL":"/bin/bash","npm_package_version":"1.0.0","npm_lifecycle_event":"npx","QT_ACCESSIBILITY":"1","GDMSESSION":"xubuntu","LESSCLOSE":"/usr/bin/lesspipe %s %s","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","XDG_VTNR":"7","npm_config_globalconfig":"/home/stu/.nvm/versions/node/v18.12.1/etc/npmrc","npm_config_init_module":"/home/stu/.npm-init.js","PWD":"/home/stu/repos/dog-app","npm_execpath":"/home/stu/.nvm/versions/node/v18.12.1/lib/node_modules/npm/bin/npx-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-xubuntu:/etc/xdg:/etc/xdg","NVM_CD_FLAGS":"","XDG_DATA_DIRS":"/usr/share/xubuntu:/usr/share/xfce4:/usr/local/share:/usr/share:/var/lib/snapd/desktop:/usr/share","npm_config_global_prefix":"/home/stu/.nvm/versions/node/v18.12.1","npm_command":"exec","VTE_VERSION":"6800","INIT_CWD":"/home/stu/repos/dog-app","EDITOR":"vi","API_KEY":"live_wMtePYATvRDPMV45HmQ4uScPw5A7KlmBFqZl5Pck9PXE6SUsEePFRUMGsJz7BXUC"}.API_KEY;

//? **`` Receives the value from the search input and fetches the dog breed data
async function searchForBreed(searchValue) {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?api_key=${apiKey}&q=${searchValue}`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Receives the value from the search input and fetches the dog breed data
async function fetchBreedImagesAndInfo(breedID) {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedID}&limit=15&has_breeds=1`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Builds a new array from out fetched data with only the data we need.
function buildBreedArray(returnedBreeds) {
  const breedArray = [];
  returnedBreeds.forEach((breed, index) => {
    breedArray[index] = {};
    breedArray[index].id = breed.id;
    breedArray[index].name = breed.name;
    if (breed.image) {
      breedArray[index].image = breed.image.url;
    }
  });
  return breedArray;
}


/***/ }),

/***/ "./src/images/dog-logo.png":
/*!*********************************!*\
  !*** ./src/images/dog-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0edd92ec4f70b319690d.png";

/***/ }),

/***/ "./src/images/dog-running.gif":
/*!************************************!*\
  !*** ./src/images/dog-running.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcdaf5fca845e736b788.gif";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b42dcec9188c99df8e20.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _modules_event_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/event-handlers */ "./src/modules/event-handlers.js");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.introPage)();

(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_1__.searchBreedsLogic)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_1__.clickLogoLogic)();

(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displaySearchIcon)();
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayLogo)();
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayFavicon)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map