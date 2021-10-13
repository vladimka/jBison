import BooleanValue from "../values/BooleanValue";
import Expression from "./Expression";

export default class BooleanExpression extends Expression {
    constructor(public value: any){super()}

    eval(context){
        return new BooleanValue(this.value);
    }
}