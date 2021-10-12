import Context from "../Context";
import Value from "../values/Value";
import Expression from "./Expression";
import UndefinedValue from "../values/UndefinedValue";

export default class AssignExpression extends Expression{
    private varName: string;
    private expr: Expression;

    constructor(varName: string, expr: Expression){
        super();
        this.varName = varName;
        this.expr = expr;
    }

    eval(context: Context): Value {
        context.set(this.varName, this.expr.eval(context));
        return new UndefinedValue();
    }
}