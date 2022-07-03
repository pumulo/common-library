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
import React from 'react';
import styled from 'styled-components';
export const StyledButton = styled.button `
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: ${(props) => (props.size === 'small' ? '7px 25px 8px' : props.size === 'medium' ? '9px 30px 11px' : '14px 30px 16px')};
    color: ${(props) => (props.primary ? '#1b116e' : '#ffffff')};
    background-color: ${(props) => (props.primary ? '#6bedb5' : '#1b116e')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    &:hover {
        background-color: ${(props) => (props.primary ? '#55bd90' : '#6bedb5')};
    }
    &:active {
        border: solid 2px #1b116e;
        padding: ${(props) => (props.size === 'small' ? '5px 23px 6px' : props.size === 'medium' ? '7px 28px 9px' : '12px 28px 14px')};
    }
`;
export const Button = (_a) => {
    var { size, primary, disabled, text, onClick } = _a, props = __rest(_a, ["size", "primary", "disabled", "text", "onClick"]);
    return (React.createElement(StyledButton, Object.assign({ type: "button", onClick: onClick, primary: primary, disabled: disabled, size: size }, props), text));
};
//# sourceMappingURL=Button.js.map