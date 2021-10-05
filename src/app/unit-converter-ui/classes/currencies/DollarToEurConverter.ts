//DollarToEurConverter

import  {UnitConverterBase} from '../UnitConverterBase';

export class DollarToEurConverter extends UnitConverterBase {
    // kaava:  c = (f -32) * 5 / 9
    constructor(public name:string){
        super(name);
    }

    getInputUnit(): string {
        return '$';
    }
    getOutputUnit(): string {
        return '€';
    }
    convert(inValue: string): string {
        let f  =parseFloat(inValue);
        let c = f * 0.93;
        return c.toFixed(2);
    }

}
