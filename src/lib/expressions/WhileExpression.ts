import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";

export default class WhileExpression extends Expression {
    constructor(public condition: Expression, public block: Expression){super()}

    eval(context){
        while(this.condition.eval(context).asBoolean()){
            this.block.eval(context);
        }

        return new UndefinedValue();
    }
}