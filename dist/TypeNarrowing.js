"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetChai(Kind) {
    if (typeof Kind == 'string') {
        return `Making ${Kind} chai ...`;
    }
    return `Chai Order: ${Kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `serving default masala chai`;
}
function orderChai(size) {
    if (size == "small") {
        return `small cutting chai..`;
    }
    if (size == "medium" || size == "large") {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class kuladchai {
    serve() {
        return `serving kulad chai`;
    }
}
class cutting {
    serve() {
        return `serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof kuladchai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type}`;
    }
    return `serving custom chai:${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "elaichi":
            return `elaichi Chai`;
            break;
        case "ginger":
            return `ginger Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
//# sourceMappingURL=TypeNarrowing.js.map