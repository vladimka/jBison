import Context from "../Context";
import NumberValue from "../values/NumberValue";
import Value from "../values/Value";
import Expression from "./Expression";

export default class NumberExpression extends Expression{
    constructor(public value: any){super();}

    eval(context: Context): Value {
        return new NumberValue(this.value);
    }
}