export const replaceResult = (value: string) => {
    const regex = /[\*\.,]/g;
    const result = value.replace(regex, (match) => {
        if (match === "*") {
            return "x";
        } else if (match === "." || match === ",") {
            return ",";
        } else {
            return match;
        }
    });


    return result;
}


export const parseValue = (firstValue: string, secondValue: string, operator: string) => {
    switch (operator) {
        case '+':
            return (+firstValue + +secondValue);
        case '-':
            return (+firstValue - +secondValue);
        case '*':
            if ((+firstValue * +secondValue).toString().length > 7) {
                return Number((+firstValue * +secondValue).toPrecision(7));
            } else {
                return (+firstValue * +secondValue);
            }
        case '/':
            if ((+firstValue / +secondValue).toString().length > 7) {
                return Number((+firstValue / +secondValue).toPrecision(7));
            } else {
                return (+firstValue / +secondValue);
            }
        default:
            return 0;
    }
}
