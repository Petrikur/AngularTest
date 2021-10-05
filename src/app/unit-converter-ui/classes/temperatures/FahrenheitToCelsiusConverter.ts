// TemperatureConverter.ts

import { UnitConverterBase } from "../UnitConverterBase";

export class FahrenheitToCelsiusConverter extends UnitConverterBase {
  // c = (f - 32) * 5 / 9
  constructor(public name: string) {
    super(name);
  }

  convert(strIn: string): string {
    let f = parseFloat(strIn);
    let c = (f - 32) * 5/9;
    return c.toFixed(2);
  }
  getInputUnit(): string {
    return '°F';
  }
  getOutputUnit(): string {
    return '°C';
  }
}
