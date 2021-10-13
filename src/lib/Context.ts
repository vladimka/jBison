import Value from "./values/Value";

export default class Context{
    public variables: Object;

    constructor(variables?: object){
        this.variables = variables || {};
    }

    set(varName: string, value: Value){
        this.variables[varName] = value;
    }

    get(varName: string): Value {
        return this.variables[varName];
    }
}