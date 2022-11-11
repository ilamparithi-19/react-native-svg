var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=extractText;exports.extractFont=extractFont;exports.setTSpan=setTSpan;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireWildcard(require("react"));var _extractLengthList=_interopRequireDefault(require("./extractLengthList"));var _util=require("../util");var _extractProps=require("./extractProps");var _jsxFileName="/Users/wojciechlewicki/work/deeper/react-native-svg/src/lib/extract/extractText.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var fontRegExp=/^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;var fontFamilyPrefix=/^[\s"']*/;var fontFamilySuffix=/[\s"']*$/;var commaReg=/\s*,\s*/g;var cachedFontObjectsFromString={};function extractSingleFontFamily(fontFamilyString){return fontFamilyString?fontFamilyString.split(commaReg)[0].replace(fontFamilyPrefix,'').replace(fontFamilySuffix,''):null;}function parseFontString(font){if(cachedFontObjectsFromString.hasOwnProperty(font)){return cachedFontObjectsFromString[font];}var match=fontRegExp.exec(font);if(!match){cachedFontObjectsFromString[font]=null;return null;}var isBold=/bold/.exec(match[1]);var isItalic=/italic/.exec(match[1]);cachedFontObjectsFromString[font]={fontSize:match[2]||12,fontWeight:isBold?'bold':'normal',fontStyle:isItalic?'italic':'normal',fontFamily:extractSingleFontFamily(match[3])};return cachedFontObjectsFromString[font];}function extractFont(props){var fontData=props.fontData,fontStyle=props.fontStyle,fontVariant=props.fontVariant,fontWeight=props.fontWeight,fontStretch=props.fontStretch,fontSize=props.fontSize,fontFamily=props.fontFamily,textAnchor=props.textAnchor,textDecoration=props.textDecoration,letterSpacing=props.letterSpacing,wordSpacing=props.wordSpacing,kerning=props.kerning,fontFeatureSettings=props.fontFeatureSettings,fontVariantLigatures=props.fontVariantLigatures,fontVariationSettings=props.fontVariationSettings,font=props.font;var ownedFont=(0,_util.pickNotNil)({fontData:fontData,fontStyle:fontStyle,fontVariant:fontVariant,fontWeight:fontWeight,fontStretch:fontStretch,fontSize:fontSize,fontFamily:extractSingleFontFamily(fontFamily),textAnchor:textAnchor,textDecoration:textDecoration,letterSpacing:letterSpacing,wordSpacing:wordSpacing,kerning:kerning,fontFeatureSettings:fontFeatureSettings,fontVariantLigatures:fontVariantLigatures,fontVariationSettings:fontVariationSettings});var baseFont=typeof font==='string'?parseFontString(font):font;var fontProps=(0,_extends2.default)({},baseFont,ownedFont);var stringifiedFontProps={};Object.keys(fontProps).map(function(k){return stringifiedFontProps[k]=fontProps[k]===null?null:String(fontProps[k]);});return stringifiedFontProps;}var TSpan;function setTSpan(TSpanImplementation){TSpan=TSpanImplementation;}function getChild(child){if(typeof child==='string'||typeof child==='number'){return _react.default.createElement(TSpan,{__self:this,__source:{fileName:_jsxFileName,lineNumber:139,columnNumber:12}},String(child));}else{return child;}}function extractText(props,container){var x=props.x,y=props.y,dx=props.dx,dy=props.dy,rotate=props.rotate,children=props.children,inlineSize=props.inlineSize,baselineShift=props.baselineShift,verticalAlign=props.verticalAlign,alignmentBaseline=props.alignmentBaseline;var textChildren=typeof children==='string'||typeof children==='number'?container?_react.default.createElement(TSpan,{__self:this,__source:{fileName:_jsxFileName,lineNumber:175,columnNumber:9}},String(children)):null:_react.Children.count(children)>1||Array.isArray(children)?_react.Children.map(children,getChild):children;var stringifiedTextProps=(0,_extractProps.stringifyPropsForFabric)({inlineSize:inlineSize,baselineShift:baselineShift,verticalAlign:verticalAlign});return(0,_extends2.default)({content:textChildren===null?String(children):null,children:textChildren},stringifiedTextProps,{alignmentBaseline:alignmentBaseline,font:extractFont(props),x:(0,_extractLengthList.default)(x),y:(0,_extractLengthList.default)(y),dx:(0,_extractLengthList.default)(dx),dy:(0,_extractLengthList.default)(dy),rotate:(0,_extractLengthList.default)(rotate)});}
//# sourceMappingURL=extractText.js.map