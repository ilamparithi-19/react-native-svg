var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _extractResponder=_interopRequireDefault(require("../lib/extract/extractResponder"));var _extractViewBox=_interopRequireDefault(require("../lib/extract/extractViewBox"));var _Shape2=_interopRequireDefault(require("./Shape"));var _G=_interopRequireDefault(require("./G"));var _NativeComponents=require("./NativeComponents");var _jsxFileName="/Users/wojciechlewicki/work/deeper/react-native-svg/src/elements/Svg.tsx";var _excluded=["style","opacity","viewBox","children","onLayout","preserveAspectRatio"];function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var RNSVGSvgViewManager=_reactNative.NativeModules.RNSVGSvgViewManager;var styles=_reactNative.StyleSheet.create({svg:{backgroundColor:'transparent',borderWidth:0}});var defaultStyle=styles.svg;var Svg=function(_Shape){(0,_inherits2.default)(Svg,_Shape);var _super=_createSuper(Svg);function Svg(){var _this;(0,_classCallCheck2.default)(this,Svg);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"measureInWindow",function(callback){var _assertThisInitialize=(0,_assertThisInitialized2.default)(_this),root=_assertThisInitialize.root;root&&root.measureInWindow(callback);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"measure",function(callback){var _assertThisInitialize2=(0,_assertThisInitialized2.default)(_this),root=_assertThisInitialize2.root;root&&root.measure(callback);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"measureLayout",function(relativeToNativeNode,onSuccess,onFail){var _assertThisInitialize3=(0,_assertThisInitialized2.default)(_this),root=_assertThisInitialize3.root;root&&root.measureLayout(relativeToNativeNode,onSuccess,onFail);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"setNativeProps",function(props){var width=props.width,height=props.height;if(width){props.bbWidth=String(width);}if(height){props.bbHeight=String(height);}var _assertThisInitialize4=(0,_assertThisInitialized2.default)(_this),root=_assertThisInitialize4.root;root&&root.setNativeProps(props);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"toDataURL",function(callback,options){if(!callback){return;}var handle=(0,_reactNative.findNodeHandle)(_this.root);RNSVGSvgViewManager.toDataURL(handle,options,callback);});return _this;}(0,_createClass2.default)(Svg,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,opacity=_this$props.opacity,viewBox=_this$props.viewBox,children=_this$props.children,onLayout=_this$props.onLayout,preserveAspectRatio=_this$props.preserveAspectRatio,extracted=(0,_objectWithoutProperties2.default)(_this$props,_excluded);var stylesAndProps=(0,_extends2.default)({},Array.isArray(style)?Object.assign.apply(Object,[{}].concat((0,_toConsumableArray2.default)(style))):style,extracted);var color=stylesAndProps.color,width=stylesAndProps.width,height=stylesAndProps.height,focusable=stylesAndProps.focusable,font=stylesAndProps.font,transform=stylesAndProps.transform,fill=stylesAndProps.fill,fillOpacity=stylesAndProps.fillOpacity,fillRule=stylesAndProps.fillRule,stroke=stylesAndProps.stroke,strokeWidth=stylesAndProps.strokeWidth,strokeOpacity=stylesAndProps.strokeOpacity,strokeDasharray=stylesAndProps.strokeDasharray,strokeDashoffset=stylesAndProps.strokeDashoffset,strokeLinecap=stylesAndProps.strokeLinecap,strokeLinejoin=stylesAndProps.strokeLinejoin,strokeMiterlimit=stylesAndProps.strokeMiterlimit;if(width===undefined&&height===undefined){width=height='100%';}var props=extracted;props.focusable=Boolean(focusable)&&focusable!=='false';var rootStyles=[defaultStyle];if(style){rootStyles.push(style);}var override=false;var overrideStyles={};var o=opacity!=null?+opacity:NaN;if(!isNaN(o)){override=true;overrideStyles.opacity=o;}if(width&&height){override=true;var w=parseInt(width,10);var h=parseInt(height,10);var doNotParseWidth=isNaN(w)||width[width.length-1]==='%';var doNotParseHeight=isNaN(h)||height[height.length-1]==='%';overrideStyles.width=doNotParseWidth?width:w;overrideStyles.height=doNotParseHeight?height:h;overrideStyles.flex=0;}if(override){rootStyles.push(overrideStyles);}props.style=rootStyles.length>1?rootStyles:defaultStyle;if(width!=null){props.bbWidth=String(width);}if(height!=null){props.bbHeight=String(height);}(0,_extractResponder.default)(props,props,this);props.tintColor=color;if(onLayout!=null){props.onLayout=onLayout;}return _react.default.createElement(_NativeComponents.RNSVGSvg,(0,_extends2.default)({},props,{ref:this.refMethod},(0,_extractViewBox.default)({viewBox:viewBox,preserveAspectRatio:preserveAspectRatio}),{__self:this,__source:{fileName:_jsxFileName,lineNumber:185,columnNumber:7}}),_react.default.createElement(_G.default,{children:children,style:style,font:font,transform:transform,fill:fill,fillOpacity:fillOpacity,fillRule:fillRule,stroke:stroke,strokeWidth:strokeWidth,strokeOpacity:strokeOpacity,strokeDasharray:strokeDasharray,strokeDashoffset:strokeDashoffset,strokeLinecap:strokeLinecap,strokeLinejoin:strokeLinejoin,strokeMiterlimit:strokeMiterlimit,__self:this,__source:{fileName:_jsxFileName,lineNumber:190,columnNumber:9}}));}}]);return Svg;}(_Shape2.default);exports.default=Svg;(0,_defineProperty2.default)(Svg,"displayName",'Svg');(0,_defineProperty2.default)(Svg,"defaultProps",{preserveAspectRatio:'xMidYMid meet'});
//# sourceMappingURL=Svg.js.map