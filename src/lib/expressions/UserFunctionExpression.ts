import Context from "../Context";
import FunctionValue from "../values/FunctionValue";
import UndefinedValue from "../values/UndefinedValue";
import Expression from "./Expression";
import ReturnExpression from "./ReturnExpression";

export default class UserFunctionExpression extends Expression {
    constructor(public name: string, public argNames: Array<string>, public body: Expression){super()}

    eval(context: Context){
        let fn = new FunctionValue((ctx, args) => {
            let returnValue = new UndefinedValue();

            for(let i = 0; i < args.length; i++){
                context.set(this.argNames[i], args[i]);
            }

            try{
                this.body.eval(context);
            }catch(e){
                if(e instanceof ReturnExpression){              
                    returnValue = e.expr.eval(context);
                }

                console.error(e);
            }

            for(let i = 0; i < args.length; i++){
                context.set(this.argNames[i], new UndefinedValue());
            }

            return returnValue;
        });
        context.set(this.name, fn);

        return new UndefinedValue();
    }
}