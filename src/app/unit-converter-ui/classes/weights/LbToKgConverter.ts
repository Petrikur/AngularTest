//LbtokgConverter.ts

import  {UnitConverterBase} from '../UnitConverterBase';

export class LbToKgConverter extends UnitConverterBase {
    // kaava:  c = (f -32) * 5 / 9
    constructor(public name:string){
        super(name);
    }

    getInputUnit(): string {
        return 'Lb';
    }
    getOutputUnit(): string {
        return 'Kg';
    }
    convert(inValue: string): string {
        let f  =parseFloat(inValue);
        let c = f * 0.45359237;
        return c.toFixed(2);
    }

}
