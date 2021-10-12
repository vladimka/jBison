import Value from "../values/Value";
import Context from "../Context";

export default class Expression{
    eval(context: Context): Value {
        throw new Error('Not implemented');
    }
}