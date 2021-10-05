
import { UnitConverter } from '../templates';
import { ConverterCategoryBase } from '../ConverterCategoryBase';

import { KgToLbConverter } from './KgToLbConverter';
import { LbToKgConverter } from "./LbToKgConverter";

export class WeightConverterCategory extends ConverterCategoryBase {
  converters: UnitConverter[] = [];

  constructor(public name = "Weight converters") {
    super(name);
    this.converters[0] = new KgToLbConverter('Kg to Lb');
    this.converters[1] = new LbToKgConverter('Lb To Kg');
  }
  getIcon(): string {
    return "fa fa-anchor";
  }
}
