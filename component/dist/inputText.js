"use strict";
exports.__esModule = true;
function ContainerInputText(_a) {
    var handlerChange = _a.handlerChange, isDisabled = _a.isDisabled, setIsDisabled = _a.setIsDisabled, handlerClick = _a.handlerClick, inputText = _a.inputText;
    return (React.createElement("div", { className: "flex flex-row" },
        React.createElement("input", { type: "url", name: "urlSearch", id: "url--Search", className: "text-black", value: inputText, onChange: function (e) {
                handlerChange(e.target.value);
            }, placeholder: "https://www.serez.dev" }),
        React.createElement("button", { disabled: isDisabled, onClick: function () {
                handlerClick();
            } }, "Enviar")));
}
exports["default"] = ContainerInputText;
