import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";

export default class IfExpression extends Expression {
    constructor(public condition: Expression, public thenBlock: Expression, public esleBlock: Expression){super()}

    eval(context){
        let res: boolean = this.condition.eval(context).asBoolean();

        return res ? this.thenBlock.eval(context) : this.esleBlock ? this.esleBlock.eval(context) : new UndefinedValue();
    }
}