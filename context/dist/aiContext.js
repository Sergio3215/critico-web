"use strict";
exports.__esModule = true;
exports.useAi = exports.AiContext = void 0;
var react_1 = require("react");
exports.AiContext = react_1.createContext({});
exports.useAi = function () { return react_1.useContext(exports.AiContext); };
