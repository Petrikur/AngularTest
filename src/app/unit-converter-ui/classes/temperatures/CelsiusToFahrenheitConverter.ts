// CelsiusToFahrenheitConverter.ts
// import { UnitConverterBase } from "../UnitConverterBase";
import { UnitConverterBase } from "../UnitConverterBase";

export class CelsiusToFahrenheitConverter extends UnitConverterBase {
  // f = (c * 9 / 5) + 32
  constructor(public name: string) {
    super(name);
  }
  convert(strIn: string): string {
    let c = parseFloat(strIn);
    let f = (c * 9 / 5) + 32;
    return f.toFixed(2);
  }
  getInputUnit(): string {
    return '°C';
  }
  getOutputUnit(): string {
    return '°F';
  }

}
