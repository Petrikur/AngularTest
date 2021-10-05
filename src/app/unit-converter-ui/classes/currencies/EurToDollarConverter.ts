//EurToDollarConverter

import  {UnitConverterBase} from '../UnitConverterBase';

export class EurToDollarConverter extends UnitConverterBase {
    
    constructor(public name:string){
        super(name);
    }

    getInputUnit(): string {
        return '€';
    }
    getOutputUnit(): string {
        return '$';
    }
    convert(inValue: string): string {
        let c = parseFloat(inValue);
        let f = c * 1.08;
        return f.toFixed(2);
    }

}



