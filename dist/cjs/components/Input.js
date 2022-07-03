"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.StyledText = exports.StyledMessage = exports.StyledLabel = exports.StyledInput = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledInput = styled_components_1.default.input `
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : props.success ? '#067d68' : '#353637')};
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`;
exports.StyledLabel = styled_components_1.default.div `
    font-size: 14px;
    color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
    padding-bottom: 6px;
`;
exports.StyledMessage = styled_components_1.default.div `
    font-size: 14px;
    color: #a9150b8;
    padding-top: 4px;
`;
exports.StyledText = styled_components_1.default.p `
    margin: 0px;
    color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`;
const Input = (_a) => {
    var { id, disabled, label, message, error, success, onChange, placeholder } = _a, props = __rest(_a, ["id", "disabled", "label", "message", "error", "success", "onChange", "placeholder"]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(exports.StyledLabel, null,
            react_1.default.createElement(exports.StyledText, { disabled: disabled, error: error }, label)),
        react_1.default.createElement(exports.StyledInput, Object.assign({ id: id, type: "text", onChange: onChange, disabled: disabled, error: error, success: success, placeholder: placeholder }, props)),
        react_1.default.createElement(exports.StyledMessage, null,
            react_1.default.createElement(exports.StyledText, { error: error }, message))));
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map