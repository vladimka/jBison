import Expression from "./Expression";
import NumberValue from '../values/NumberValue';
import Value from "../values/Value";
import Context from "../Context";
import BooleanValue from "../values/BooleanValue";

export default class BinaryExpression extends Expression{
    constructor(public expr1: Expression, public expr2: Expression, public op: string){super()}

    eval(context: Context): Value {
        switch(this.op){
            case "-": return new NumberValue(this.expr1.eval(context).asNumber() - this.expr2.eval(context).asNumber());
            case "/": return new NumberValue(this.expr1.eval(context).asNumber() / this.expr2.eval(context).asNumber());
            case "*": return new NumberValue(this.expr1.eval(context).asNumber() * this.expr2.eval(context).asNumber());
            case "+": return new NumberValue(this.expr1.eval(context).asNumber() + this.expr2.eval(context).asNumber());
            case ">": return new BooleanValue(this.expr1.eval(context).asNumber() > this.expr2.eval(context).asNumber());
            case "<": return new BooleanValue(this.expr1.eval(context).asNumber() < this.expr2.eval(context).asNumber());
        }
    }
}