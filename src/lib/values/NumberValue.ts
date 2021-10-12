import Value from "./Value";

export default class NumberValue extends Value{
    asNumber(){
        return parseFloat(this.value);
    }

    asString(){
        return this.value.toString();
    }

    asBoolean(){
        return this.value == 0 ? false : true;
    }
}