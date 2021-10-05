// MeterToMilesConverter.ts

import { UnitConverterBase } from "../UnitConverterBase";

export class MeterToMilesConverter extends UnitConverterBase {
  // mi = m * 0.00062137
  constructor(public name: string) {
    super(name);
  }
  convert(strIn: string): string {
    let m = parseFloat(strIn);
    let mi = m * 0.00062137;
    return mi.toFixed(2);
  }
  getInputUnit(): string {
    return "meters";
  }
  getOutputUnit(): string {
    return "miles";
  }
}
