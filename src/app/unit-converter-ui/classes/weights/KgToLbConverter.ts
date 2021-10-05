// CelsiusToFahrenheitConverter.ts
// import { UnitConverterBase } from "../UnitConverterBase";
import { UnitConverterBase } from "../UnitConverterBase";

export class KgToLbConverter extends UnitConverterBase {
  // f = (c * 9 / 5) + 32
  constructor(public name: string) {
    super(name);
  }
  convert(strIn: string): string {
    let c = parseFloat(strIn);
    let f = c * 2.2046;
    return f.toFixed(2);
  }
  getInputUnit(): string {
    return 'Kg';
  }
  getOutputUnit(): string {
    return 'Lb';
  }

}
