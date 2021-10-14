import Context from "../Context";
import Value from "./Value";

export default class FunctionValue extends Value {
    asString(){
        return `[Function]`;
    }

    execute(context: Context, args: Array<Value>){
        return this.value(context, args);
    }
}