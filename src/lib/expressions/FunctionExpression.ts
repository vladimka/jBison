import Context from "../Context";
import FunctionValue from "../values/FunctionValue";
import Expression from "./Expression";

export default class FunctionExpression extends Expression {
    constructor(public fnName: string, public args: Array<Expression>){super()}

    eval(context: Context){
        let argsAsVals = this.args.map(arg => arg.eval(context));
        let fn = context.get(this.fnName) as FunctionValue;

        if(!fn)
            throw new Error('Function with name "' + this.fnName + '" doesnt exists');

        return fn.execute(context, argsAsVals);
    }
}