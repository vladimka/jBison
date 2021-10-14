import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";

export default class ReturnExpression extends Expression {
    constructor(public expr: Expression){super()}

    eval(context){
        throw this;
        return new UndefinedValue();
    }
}