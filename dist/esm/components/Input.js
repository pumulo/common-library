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
import React, { Fragment } from 'react';
import styled from 'styled-components';
export const StyledInput = styled.input `
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : props.success ? '#067d68' : '#353637')};
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`;
export const StyledLabel = styled.div `
    font-size: 14px;
    color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
    padding-bottom: 6px;
`;
export const StyledMessage = styled.div `
    font-size: 14px;
    color: #a9150b8;
    padding-top: 4px;
`;
export const StyledText = styled.p `
    margin: 0px;
    color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`;
export const Input = (_a) => {
    var { id, disabled, label, message, error, success, onChange, placeholder } = _a, props = __rest(_a, ["id", "disabled", "label", "message", "error", "success", "onChange", "placeholder"]);
    return (React.createElement(Fragment, null,
        React.createElement(StyledLabel, null,
            React.createElement(StyledText, { disabled: disabled, error: error }, label)),
        React.createElement(StyledInput, Object.assign({ id: id, type: "text", onChange: onChange, disabled: disabled, error: error, success: success, placeholder: placeholder }, props)),
        React.createElement(StyledMessage, null,
            React.createElement(StyledText, { error: error }, message))));
};
//# sourceMappingURL=Input.js.map