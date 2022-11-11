"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _extractViewBox=_interopRequireDefault(require("../lib/extract/extractViewBox"));var _Shape2=_interopRequireDefault(require("./Shape"));var _NativeComponents=require("./NativeComponents");var _extractProps=require("../lib/extract/extractProps");var _jsxFileName="/Users/wojciechlewicki/work/deeper/react-native-svg/src/elements/Marker.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Marker=function(_Shape){(0,_inherits2.default)(Marker,_Shape);var _super=_createSuper(Marker);function Marker(){(0,_classCallCheck2.default)(this,Marker);return _super.apply(this,arguments);}(0,_createClass2.default)(Marker,[{key:"render",value:function render(){var props=this.props;var id=props.id,viewBox=props.viewBox,preserveAspectRatio=props.preserveAspectRatio,refX=props.refX,refY=props.refY,markerUnits=props.markerUnits,orient=props.orient,markerWidth=props.markerWidth,markerHeight=props.markerHeight,children=props.children;var markerProps=(0,_extractProps.stringifyPropsForFabric)({name:id,refX:refX,refY:refY,markerUnits:markerUnits,orient:String(orient),markerWidth:markerWidth,markerHeight:markerHeight});return _react.default.createElement(_NativeComponents.RNSVGMarker,(0,_extends2.default)({ref:this.refMethod},markerProps,(0,_extractViewBox.default)({viewBox:viewBox,preserveAspectRatio:preserveAspectRatio}),{__self:this,__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:7}}),children);}}]);return Marker;}(_Shape2.default);exports.default=Marker;(0,_defineProperty2.default)(Marker,"displayName",'Marker');(0,_defineProperty2.default)(Marker,"defaultProps",{refX:0,refY:0,orient:'0',markerWidth:3,markerHeight:3,markerUnits:'strokeWidth'});
//# sourceMappingURL=Marker.js.map