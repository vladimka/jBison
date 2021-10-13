import Value from "./Value";

export default class BooleanValue extends Value {
    asNumber(){
        return this.value == true ? 1 : 0;
    }

    asBoolean(){
        return this.value;
    }

    asString(){
        return this.value.toString();
    }
}