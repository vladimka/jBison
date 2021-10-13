import Context from "../Context";
import Value from "./Value";

export default class FunctionValue extends Value {
    asString(){
        return `[Function]`;
    }

    execute(context: Context, args: Array<Value>){
        let new_context = new Context(context.variables);

        return this.value(new_context, args);
    }
}