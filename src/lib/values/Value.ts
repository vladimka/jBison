export default class Value{
    constructor(public value: any){}

    asNumber(): number {
        throw new Error("Can not cast to 'number'");
    }

    asString(): string {
        throw new Error("Can not cast to 'number'");
    }

    asBoolean(): boolean {
        throw new Error("Can not cast to 'number'");
    }
}