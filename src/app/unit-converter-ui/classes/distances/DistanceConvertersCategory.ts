// DistanceConverterCategory.ts

import { UnitConverter } from "../templates";
import { ConverterCategoryBase } from "../ConverterCategoryBase";

import { MilesToMetersConverter } from "./MilesToMetersConverter";
import { MeterToMilesConverter } from "./MeterToMilesConverter";

export class DistanceConverterCategory extends ConverterCategoryBase {
  converters: UnitConverter[] = [];

  constructor(public name = "Distance converters") {
    super(name);
    this.converters[0] = new MilesToMetersConverter("Miles to Meters");
    this.converters[1] = new MeterToMilesConverter("Meters to Miles");
  }
  getIcon(): string {
    return "fas fa-road";
  }
}
