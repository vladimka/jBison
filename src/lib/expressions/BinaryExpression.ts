import Expression from "./Expression";
import NumberValue from '../values/NumberValue';
import Value from "../values/Value";
import Context from "../Context";
import BooleanValue from "../values/BooleanValue";
import StringValue from "../values/StringValue";
import FunctionValue from "../values/FunctionValue";

export default class BinaryExpression extends Expression{
    constructor(public expr1: Expression, public expr2: Expression, public op: string){super()}

    eval(context: Context): Value {
        let v1 = this.expr1.eval(context), v2 = this.expr2.eval(context); 

        if(v1 instanceof NumberValue || v2 instanceof NumberValue){
            switch(this.op){
                case "-": return new NumberValue(v1.asNumber() - v2.asNumber());
                case "/": return new NumberValue(v1.asNumber() / v2.asNumber());
                case "*": return new NumberValue(v1.asNumber() * v2.asNumber());
                case "+": return new NumberValue(v1.asNumber() + v2.asNumber());
                case ">": 
                    console.log(v1, v2);
                    return new NumberValue(v1.asNumber() > v2.asNumber());
                case "<": return new NumberValue(v1.asNumber() < v2.asNumber());
                case '==': return new BooleanValue(v1.asNumber() == v2.asNumber());
                case '||': return new NumberValue(v1.asNumber() || v2.asNumber());
                default:
                    throw new Error('Unknown operation: ' + this.op);
            }
        }

        if(v1 instanceof BooleanValue || v2 instanceof BooleanValue){
            switch(this.op){
                case '==': return new BooleanValue(v1.asBoolean() == v2.asBoolean());
                case '||': return new BooleanValue(v1.asBoolean() || v2.asBoolean());
                default:
                    throw new Error('Unknown operation: ' + this.op);
            }
        }

        if(v1 instanceof FunctionValue || v2 instanceof FunctionValue){
            switch(this.op){
                case '==': return new BooleanValue(v1.asBoolean() == v2.asBoolean());
                case '||': return new BooleanValue(v1.asBoolean() || v2.asBoolean());
                default:
                    throw new Error('Unknown operation: ' + this.op);
            }
        }
    }
}