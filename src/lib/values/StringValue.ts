import Value from "./Value";

export default class StringValue extends Value {
    asString(){
        return this.value;
    }

    asBoolean(){
        return this.value != '';
    }
}