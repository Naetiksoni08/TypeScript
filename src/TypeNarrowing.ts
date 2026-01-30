function GetChai(Kind: string | number) {
    if (typeof Kind == 'string') {
        return `Making ${Kind} chai ...`
    }
    return `Chai Order: ${Kind}`

}
function serveChai(msg?: string) {
    if (msg) {
        return `serving ${msg}`
    }
    return `serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size == "small") {
        return `small cutting chai..`
    }
    if (size == "medium" || size == "large") {
        return `make extra chai`;
    }
    return `chai order #${size}`
}


class kuladchai {
    serve() {
        return `serving kulad chai`
    }
}

class cutting {
    serve() {
        return `serving cutting chai`
    }
}

function serve(chai: kuladchai | cutting) {
    if (chai instanceof kuladchai) {
        return chai.serve();
    }
}

type rooms = "Explore" | "Requested" | "private" | "Installed"; // type is a keyword apne type define kar sakte hai 

type chaiorder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiorder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"

    )

}

function serveOrder(item: chaiorder | string) {
    if (isChaiOrder(item)) {
        return `serving ${item.type}`
    }
    return `serving custom chai:${item}`
}


type Masalachai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type elaichichai = { type: "elaichi"; aroma: number };


type chai = Masalachai | GingerChai | elaichichai;

function MakeChai(order: chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "elaichi":
            return `elaichi Chai`
            break;
        case "ginger":
            return `ginger Chai`
            break;
    }
}


function brew(order:Masalachai|GingerChai) {
    if("spicelevel" in order) {
        //
    }
}

