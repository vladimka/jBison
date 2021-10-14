import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";

export default class BlockExpression extends Expression {
    constructor(public expressions: Array<Expression>){super()}

    eval(context){
        for(let expr of this.expressions)
            expr.eval(context);

        return new UndefinedValue();
    }
}