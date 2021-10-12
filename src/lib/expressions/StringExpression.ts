import StringValue from "../values/StringValue";
import Expression from "./Expression";

export default class StringExpression extends Expression {
    constructor(public value: any){super();}

    eval(context){
        return new StringValue(this.value);
    }
}