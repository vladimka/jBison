import Value from "./values/Value";

export default class Context{
    private variables: Object;

    constructor(){
        this.variables = {};
    }

    set(varName: string, value: Value){
        this.variables[varName] = value;
    }

    get(varName: string): Value {
        return this.variables[varName];
    }
}