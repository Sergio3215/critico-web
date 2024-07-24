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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var marked_1 = require("marked");
var react_1 = require("react");
function ContainerOutputText(_a) {
    var _this = this;
    var outputText = _a.outputText, isDisabled = _a.isDisabled, setIsDisabled = _a.setIsDisabled, setOutputText = _a.setOutputText, route = _a.route, handlerAiStream = _a.handlerAiStream;
    react_1.useEffect(function () {
        handlerLoad();
        addUrlParam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    react_1.useEffect(function () {
        addUrlParam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outputText]);
    var addUrlParam = function () {
        if (document.querySelector("#display--output div p a") != null) {
            document.querySelectorAll("#display--output div p a").forEach(function (link) {
                link.setAttribute("href", "https://" + location.pathname.replace("/", ""));
                link.textContent = "https://" + location.pathname.replace("/", "");
            });
        }
        if (document.querySelector("#display--output div h2 a") != null) {
            document.querySelectorAll("#display--output div h2 a").forEach(function (link) {
                link.setAttribute("href", "https://" + location.pathname.replace("/", ""));
                link.textContent = "https://" + location.pathname.replace("/", "");
            });
        }
    };
    var handlerLoad = function () { return __awaiter(_this, void 0, void 0, function () {
        var txt, str, stream, stream_1, stream_1_1, part, e_1_1, error_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(route !== undefined)) return [3 /*break*/, 17];
                    setIsDisabled(true);
                    txt = "";
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 15, , 16]);
                    str = "";
                    return [4 /*yield*/, handlerAiStream("https://" + location.pathname.replace("/", ""))];
                case 2:
                    stream = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 8, 9, 14]);
                    stream_1 = __asyncValues(stream);
                    _b.label = 4;
                case 4: return [4 /*yield*/, stream_1.next()];
                case 5:
                    if (!(stream_1_1 = _b.sent(), !stream_1_1.done)) return [3 /*break*/, 7];
                    part = stream_1_1.value;
                    str += part;
                    setOutputText(marked_1.marked.parse(str));
                    _b.label = 6;
                case 6: return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _b.trys.push([9, , 12, 13]);
                    if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1["return"]))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _a.call(stream_1)];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14:
                    setIsDisabled(false);
                    addUrlParam();
                    return [3 /*break*/, 16];
                case 15:
                    error_1 = _b.sent();
                    console.log(error_1);
                    txt = "No has agregado una URL valido!";
                    setOutputText(txt);
                    setIsDisabled(false);
                    return [3 /*break*/, 16];
                case 16:
                    addUrlParam();
                    _b.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null, route == undefined ?
        React.createElement(React.Fragment, null,
            React.createElement("div", { id: "display--promotional" },
                React.createElement("div", null,
                    React.createElement("h1", { id: "label--principal--promotional" }, "\u00A1Un desaf\u00EDo personal!"),
                    React.createElement("h2", null, "Probarte a ti mismo, es ver tus capacidades ocultas."),
                    React.createElement("h3", null, "Aprender lo que no pensabas o sab\u00EDas, es descubrir algo nuevo."),
                    React.createElement("h4", null,
                        "Proba tu web, es proba tu ",
                        React.createElement("b", null, "Criticador Web"),
                        "."))))
        :
            isDisabled ?
                React.createElement(React.Fragment, null,
                    React.createElement("div", { id: "cargando--display" },
                        React.createElement("div", null,
                            React.createElement("h1", { id: "label--principal" }, "Cargando..."))))
                :
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { id: "display--output", style: {
                                display: (outputText == "") ? "none" : ""
                            } },
                            React.createElement("div", { dangerouslySetInnerHTML: { __html: outputText.replaceAll(":", "") } })))));
}
exports["default"] = ContainerOutputText;
