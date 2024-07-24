"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var inputText_1 = require("./inputText");
var outputText_1 = require("./outputText");
require("./container.css");
var lupa_png_1 = require("../public/lupa.png");
var image_1 = require("next/image");
var aiContext_1 = require("@/context/aiContext");
function ContainerApp(_a) {
    var _this = this;
    var route = _a.route, router = _a.router;
    var _b = react_1.useState(""), inputText = _b[0], setInputText = _b[1];
    var _c = react_1.useState(""), outputText = _c[0], setOutputText = _c[1];
    var _d = react_1.useState(false), isDisabled = _d[0], setIsDisabled = _d[1];
    var handlerAiStream = aiContext_1.useAi().handlerAiStream;
    react_1.useEffect(function () {
        // console.log(route);
        var isUndefined_ = route == undefined;
        if (!isUndefined_) {
            setInputText("https://" + route);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route]);
    react_1.useEffect(function () {
    }, [inputText, outputText, isDisabled]);
    var handlerChange = function (value) {
        setInputText(value);
    };
    var handlerClick = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            router.push(location.origin + "/" + inputText.replace("https://", "").replace("http://", ""));
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("main", { className: "flex min-h-screen flex-col items-center p-16" },
        React.createElement("div", { id: route != undefined ? "main--container--small" : "main--container" },
            React.createElement("div", { className: "flex" },
                React.createElement("h1", { id: "label--principal" }, "Criticador Web"),
                React.createElement(image_1["default"], { src: lupa_png_1["default"].src, alt: "Lupa de critico web", width: 68, height: 40 })),
            React.createElement(inputText_1["default"], { inputText: inputText, handlerChange: handlerChange, handlerClick: handlerClick, setIsDisabled: setIsDisabled, isDisabled: isDisabled })),
        React.createElement(outputText_1["default"], { outputText: outputText, isDisabled: isDisabled, setIsDisabled: setIsDisabled, setOutputText: setOutputText, route: route, handlerAiStream: handlerAiStream })));
}
exports["default"] = ContainerApp;
