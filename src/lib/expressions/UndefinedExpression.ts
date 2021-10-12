import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";

export default class UndefinedExpression extends Expression {
    constructor(){super();}

    asString(){
        return "undefined";
    }

    eval(){
        return new UndefinedValue();
    }
}