exports.ids = [2];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b7f44932", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokeballLoader_vue_vue_type_style_index_0_id_43a34b1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokeballLoader_vue_vue_type_style_index_0_id_43a34b1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokeballLoader_vue_vue_type_style_index_0_id_43a34b1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokeballLoader_vue_vue_type_style_index_0_id_43a34b1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokeballLoader_vue_vue_type_style_index_0_id_43a34b1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper[data-v-43a34b1c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pokeball[data-v-43a34b1c]{width:60px;height:60px;background-color:#fff;border-radius:50%;position:relative;overflow:hidden;border:3px solid;-webkit-animation:frames-data-v-43a34b1c .8s linear 0s infinite;animation:frames-data-v-43a34b1c .8s linear 0s infinite}.pokeball[data-v-43a34b1c]:after{content:\"\";position:absolute;width:60px;height:30px;background-color:red;border-bottom:4px solid;left:0}.pokeball[data-v-43a34b1c]:before{content:\"\";position:absolute;background-color:#fff;width:10px;height:10px;border:4px solid;border-radius:50%;bottom:22px;right:22px;z-index:1}@-webkit-keyframes frames-data-v-43a34b1c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes frames-data-v-43a34b1c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PokeballLoader/PokeballLoader.vue?vue&type=template&id=43a34b1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"pokeball\" data-v-43a34b1c></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PokeballLoader/PokeballLoader.vue?vue&type=template&id=43a34b1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PokeballLoader/PokeballLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var PokeballLoadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/PokeballLoader/PokeballLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var PokeballLoader_PokeballLoadervue_type_script_lang_js_ = (PokeballLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PokeballLoader/PokeballLoader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PokeballLoader_PokeballLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43a34b1c",
  "1f7d2125"
  
)

/* harmony default export */ var PokeballLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2a426425", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0ddf6e66", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pokemon_vue_vue_type_style_index_0_id_f7b02bea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pokemon_vue_vue_type_style_index_0_id_f7b02bea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pokemon_vue_vue_type_style_index_0_id_f7b02bea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pokemon_vue_vue_type_style_index_0_id_f7b02bea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pokemon_vue_vue_type_style_index_0_id_f7b02bea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-f7b02bea]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.container .back[data-v-f7b02bea]{position:absolute;top:15px;left:15px;font-size:20px;font-weight:700;cursor:pointer}.container .container__pokemon-info[data-v-f7b02bea]{display:flex}.container .container__pokemon-info__image[data-v-f7b02bea]{margin-right:30px}.container .container__pokemon-info__content[data-v-f7b02bea]{text-align:left}.container .container__pokemon-info__content-name[data-v-f7b02bea]{font-weight:700;text-align:left}.container .container__pokemon-info__content-name[data-v-f7b02bea],.container .container__pokemon-info__content-types[data-v-f7b02bea]{text-transform:capitalize}.container .container__pokemon-info__content-types[data-v-f7b02bea]{display:flex;text-align:left}.container .container__pokemon-info__content-types .type[data-v-f7b02bea]:last-child{margin-left:10px}.container .container__pokemon-attributes[data-v-f7b02bea]{text-align:left;margin-top:15px}.container .container__pokemon-attributes__abilities[data-v-f7b02bea]{text-transform:capitalize}.container .container__pokemon-stats[data-v-f7b02bea]{text-align:left;margin-top:15px}.container .container__pokemon-stats__block[data-v-f7b02bea]{display:grid;grid-template-columns:50% 50%}.container .container__pokemon-evolution[data-v-f7b02bea]{text-align:left;margin-top:15px}.container .container__pokemon-evolution__block[data-v-f7b02bea]{display:flex;justify-content:center}.container .container__pokemon-evolution__block-chain[data-v-f7b02bea]{margin:0 8px;text-transform:capitalize}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokemonTypeBadge_vue_vue_type_style_index_0_id_f8732ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokemonTypeBadge_vue_vue_type_style_index_0_id_f8732ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokemonTypeBadge_vue_vue_type_style_index_0_id_f8732ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokemonTypeBadge_vue_vue_type_style_index_0_id_f8732ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PokemonTypeBadge_vue_vue_type_style_index_0_id_f8732ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type[data-v-f8732ab8]{font-size:15px;font-family:\"Trebuchet MS\";font-weight:700;width:6em;text-align:center;display:inline-block;border:.1em solid transparent;padding:.1em .2em .2em;margin:.1em .015em;border-radius:.4em}.type span[data-v-f8732ab8]{text-transform:uppercase;font-size:.8em;color:#fff;text-shadow:0 0 .2em #000}.type-normal[data-v-f8732ab8]{background-color:#a8a878;border-top-color:#c6c6a7;border-bottom-color:#818153}.type-fire[data-v-f8732ab8]{background-color:#f08030;border-top-color:#f5ac77;border-bottom-color:#c55b0e}.type-fighting[data-v-f8732ab8]{background-color:#c03028;border-top-color:#dc5f58;border-bottom-color:#81201b}.type-water[data-v-f8732ab8]{background-color:#6890f0;border-top-color:#aec3f7;border-bottom-color:#225de9}.type-poison[data-v-f8732ab8]{background-color:#a040a0;border-top-color:#c369c3;border-bottom-color:#692a69}.type-electric[data-v-f8732ab8]{background-color:#f8d030;border-top-color:#fbe17a;border-bottom-color:#d4ab07}.type-ground[data-v-f8732ab8]{background-color:#e0c068;border-top-color:#eddaa7;border-bottom-color:#d1a42b}.type-grass[data-v-f8732ab8]{background-color:#78c850;border-top-color:#a5da8a;border-bottom-color:#549b31}.type-flying[data-v-f8732ab8]{background-color:#a890f0;border-top-color:#ddd3f9;border-bottom-color:#734de7}.type-ice[data-v-f8732ab8]{background-color:#98d8d8;border-top-color:#cfeded;border-bottom-color:#61c3c3}.type-bug[data-v-f8732ab8]{background-color:#a8b820;border-top-color:#cfdf46;border-bottom-color:#6d7715}.type-psychic[data-v-f8732ab8]{background-color:#f85888;border-top-color:#fba1bc;border-bottom-color:#f50f54}.type-rock[data-v-f8732ab8]{background-color:#b8a038;border-top-color:#d2bf6b;border-bottom-color:#7d6d26}.type-dragon[data-v-f8732ab8]{background-color:#7038f8;border-top-color:#a582fb;border-bottom-color:#4608dc}.type-ghost[data-v-f8732ab8]{background-color:#705898;border-top-color:#9884b8;border-bottom-color:#4c3c68}.type-dark[data-v-f8732ab8]{background-color:#705848;border-top-color:#9d7d67;border-bottom-color:#41332a}.type-steel[data-v-f8732ab8]{background-color:#b8b8d0;border-top-color:#e6e6ee;border-bottom-color:#8a8ab2}.type-fairy[data-v-f8732ab8]{background-color:#ffb7fa;border-top-color:#fff;border-bottom-color:#ff6bf5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PokemonTypeBadge/PokemonTypeBadge.vue?vue&type=template&id=f8732ab8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("type type-" + _vm.type)},[_vm._ssrNode("<span data-v-f8732ab8>"+_vm._ssrEscape("\n    "+_vm._s(_vm.type)+"\n  ")+"</span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PokemonTypeBadge/PokemonTypeBadge.vue?vue&type=template&id=f8732ab8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PokemonTypeBadge/PokemonTypeBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var PokemonTypeBadgevue_type_script_lang_js_ = ({
  props: {
    type: String
  }
});
// CONCATENATED MODULE: ./components/PokemonTypeBadge/PokemonTypeBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var PokemonTypeBadge_PokemonTypeBadgevue_type_script_lang_js_ = (PokemonTypeBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PokemonTypeBadge/PokemonTypeBadge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PokemonTypeBadge_PokemonTypeBadgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f8732ab8",
  "fd58a876"
  
)

/* harmony default export */ var PokemonTypeBadge = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pokemon.vue?vue&type=template&id=f7b02bea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container flex-col"},[_vm._ssrNode("<div class=\"back\" data-v-f7b02bea>\n    Back\n  </div> "),(_vm.selected)?_vm._ssrNode("<div class=\"bg-blue-200 p-5 rounded-md\" data-v-f7b02bea>","</div>",[_vm._ssrNode("<div class=\"container__pokemon-info\" data-v-f7b02bea>","</div>",[_vm._ssrNode("<div class=\"container__pokemon-info__image\" data-v-f7b02bea><img"+(_vm._ssrAttr("src",_vm.getPokemonImage(_vm.selected.id)))+" data-v-f7b02bea></div> "),_vm._ssrNode("<div class=\"container__pokemon-info__content\" data-v-f7b02bea>","</div>",[_vm._ssrNode("<div class=\"container__pokemon-info__content-name\" data-v-f7b02bea>"+_vm._ssrEscape("\n          #"+_vm._s(_vm.selected.id)+" - "+_vm._s(_vm.selected.name)+"\n        ")+"</div> "),_vm._ssrNode("<div class=\"container__pokemon-info__content-types\" data-v-f7b02bea>","</div>",_vm._l((_vm.selected.types),function(ref,index){
var type = ref.type;
return _c('PokemonTypeBadge',{key:(index+2)*22,attrs:{"type":type.name}})}),1)],2)],2),_vm._ssrNode(" <div class=\"container__pokemon-attributes\" data-v-f7b02bea><b data-v-f7b02bea>Abilities:</b><br data-v-f7b02bea> <div class=\"container__pokemon-attributes__abilities\" data-v-f7b02bea>"+(_vm._ssrList((_vm.selected.abilities),function(ref,index){
var ability = ref.ability;
return ("<div data-v-f7b02bea>"+_vm._ssrEscape("\n          "+_vm._s(ability.name)+"\n        ")+"</div>")}))+"</div></div> <div class=\"container__pokemon-stats\" data-v-f7b02bea><b data-v-f7b02bea>Stats:</b> <div class=\"container__pokemon-stats__block\" data-v-f7b02bea>"+(_vm._ssrList((_vm.selected.stats),function(ref,index){
var stat = ref.stat;
var base_stat = ref.base_stat;
return ("<div class=\"container__pokemon-stats__block-stat\" data-v-f7b02bea>"+_vm._ssrEscape("\n          "+_vm._s(_vm.statText(stat.name))+": "+_vm._s(base_stat)+"\n        ")+"</div>")}))+"</div></div> "+((_vm.evolutionChain && _vm.evolutionChain.species)?("<div class=\"container__pokemon-evolution\" data-v-f7b02bea><b data-v-f7b02bea>Evolution Chain:</b> <div class=\"container__pokemon-evolution__block\" data-v-f7b02bea><div class=\"container__pokemon-evolution__block-chain\" data-v-f7b02bea>"+_vm._ssrEscape("\n          "+_vm._s(_vm.evolutionChain.species.name)+"\n        ")+"</div> "+((_vm.evolutionChain.evolves_to[0])?("<div data-v-f7b02bea>\n          =&gt;\n        </div>"):"<!---->")+" "+((_vm.evolutionChain.evolves_to[0])?("<div class=\"container__pokemon-evolution__block-chain\" data-v-f7b02bea>"+_vm._ssrEscape("\n          "+_vm._s(_vm.evolutionChain.evolves_to[0].species.name)+"\n        ")+"</div>"):"<!---->")+" "+((_vm.evolutionChain.evolves_to[0].evolves_to[0])?("<div data-v-f7b02bea>\n          =&gt;\n        </div>"):"<!---->")+" "+((_vm.evolutionChain.evolves_to[0].evolves_to[0])?("<div class=\"container__pokemon-evolution__block-chain\" data-v-f7b02bea>"+_vm._ssrEscape("\n          "+_vm._s(_vm.evolutionChain.evolves_to[0].evolves_to[0].species.name)+"\n        ")+"</div>"):"<!---->")+"</div></div>"):"<!---->"))],2):_vm._ssrNode("<div data-v-f7b02bea>","</div>",[_c('PokeballLoader')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pokemon.vue?vue&type=template&id=f7b02bea&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pokemon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pokemonvue_type_script_lang_js_ = ({
  data() {
    return {
      pokeImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      selected: state => state.pokemon.selected,
      evolutionChain: state => state.pokemon.evolutionChain,
      loading: state => state.pokemon.loading
    })
  },

  mounted() {
    if (Object.keys(this.selected).length <= 0) {
      this.$router.push({
        path: '/'
      });
    }

    console.log('SELECTED: ', this.selected);
    console.log('CHAIN: ', this.evolutionChain);
  },

  methods: {
    getPokemonImage(number) {
      return `${this.pokeImage}/${number}.png`;
    },

    statText(stat) {
      switch (stat) {
        case 'hp':
          return 'HP';

        case 'attack':
          return 'Attack';

        case 'defense':
          return 'Defense';

        case 'special-attack':
          return 'Sp. Attack';

        case 'special-defense':
          return 'Sp. Defense';

        case 'speed':
          return 'Speed';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/pokemon.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pokemonvue_type_script_lang_js_ = (pokemonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/pokemon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pokemonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f7b02bea",
  "2493d05c"
  
)

/* harmony default export */ var pokemon = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PokemonTypeBadge: __webpack_require__(45).default,PokeballLoader: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=pokemon.js.map