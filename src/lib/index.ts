import Expression from "./expressions/Expression";
import NumberExpression from "./expressions/NumberExpression";
import BinaryExpression from './expressions/BinaryExpression';
import Context from "./Context";
import AssignExpression from "./expressions/AssignExpression";
import StringExpression from "./expressions/StringExpression";
import VariableExpression from "./expressions/VariableExpression";
import UndefinedExpression from "./expressions/UndefinedExpression";
import BooleanExpression from "./expressions/BooleanExpression";
import FunctionExpression from "./expressions/FunctionExpression";
import FunctionValue from "./values/FunctionValue";
import UndefinedValue from "./values/UndefinedValue";
import BlockExpression from "./expressions/BlockExpression";
import IfExpression from "./expressions/IfExpression";
import WhileExpression from "./expressions/WhileExpression";
import UserFunctionExpression from "./expressions/UserFunctionExpression";
import ReturnExpression from "./expressions/ReturnExpression";

class Program{
    private expressionList: Array<Expression>;
    private context: Context;

    constructor(expressionlist){
        this.expressionList = expressionlist;
        this.context = new Context();
        this.context.set("print", new FunctionValue((context, args) => {
            let out = '';
            args.forEach(arg => out += arg.asString() + ' ');
            console.log(out);
            return new UndefinedValue();
        }));
    }

    execute(): void {
        for(let expression of this.expressionList){
            expression.eval(this.context);
        }

        console.log(this.context, '\n', JSON.stringify(this.expressionList, null, '\t'));
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
    BooleanExpression,
    FunctionExpression,
    BlockExpression,
    IfExpression,
    WhileExpression,
    UserFunctionExpression,
    ReturnExpression,
    Program
}