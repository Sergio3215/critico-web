"use client";
"use strict";
exports.__esModule = true;
var container_1 = require("@/component/container");
var navigation_1 = require("next/navigation");
function Home() {
    var router = navigation_1.useRouter();
    return (React.createElement(container_1["default"], { router: router }));
}
exports["default"] = Home;
