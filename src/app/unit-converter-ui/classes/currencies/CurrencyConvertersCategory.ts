//Currency Converter

import { UnitConverter } from '../templates';
import { ConverterCategoryBase } from '../ConverterCategoryBase';

import { EurToDollarConverter } from './EurToDollarConverter';
import { DollarToEurConverter } from "./DollarToEurConverter";

export class CurrencyConverterCategory extends ConverterCategoryBase {
  converters: UnitConverter[] = [];

  constructor(public name = "Currency converters") {
    super(name);
    this.converters[0] = new EurToDollarConverter('Eur To Dollar');
    this.converters[1] = new DollarToEurConverter('Dollar To Eur');
  }
  getIcon(): string {
    return "fa fa-money";
  }
}
