// MilesToMetersConverter.ts

import { UnitConverterBase } from "../UnitConverterBase";

export class MilesToMetersConverter extends UnitConverterBase {
  // m = mi / 0.00062137
  constructor(public name: string) {
    super(name);
  }
  convert(strIn: string): string {
    let mi = parseFloat(strIn);
    let m = mi / 0.00062137;
    return m.toFixed(2);
  }
  getInputUnit(): string {
    return "miles";
  }
  getOutputUnit(): string {
    return "meters";
  }
}
