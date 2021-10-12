import Context from "../Context";
import Expression from "./Expression";

export default class VariableExpression extends Expression{
    constructor(public varName){super();}

    eval(context: Context){
        return context.get(this.varName);
    }
}