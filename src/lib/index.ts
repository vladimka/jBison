import Expression from "./expressions/Expression";
import NumberExpression from "./expressions/NumberExpression";
import BinaryExpression from './expressions/BinaryExpression';
import Context from "./Context";
import AssignExpression from "./expressions/AssignExpression";
import StringExpression from "./expressions/StringExpression";
import VariableExpression from "./expressions/VariableExpression";
import UndefinedExpression from "./expressions/UndefinedExpression";
import Value from "./values/Value";

class Program{
    private expressionList: Array<Expression>;
    private context: Context;

    constructor(expressionlist){
        this.expressionList = expressionlist;
        this.context = new Context();
    }

    execute(): string {
        let retVal;

        for(let expression of this.expressionList){
            retVal = expression.eval(this.context);
        }
        // console.log(this.context);

        return retVal.asString() || new UndefinedExpression();
    }
}

export default {
    Expression,
    NumberExpression,
    BinaryExpression,
    AssignExpression,
    StringExpression,
    VariableExpression,
    UndefinedExpression,
    Program
}