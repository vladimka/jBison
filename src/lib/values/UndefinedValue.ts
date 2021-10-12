import Value from "./Value";

export default class UndefinedValue extends Value {
    constructor(){super(0);}

    asString(){
        return "undefined";
    }
}