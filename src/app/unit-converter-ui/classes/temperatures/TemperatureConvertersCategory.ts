//TemperatureConverterCategory.ts

import { UnitConverter } from '../templates';
import { ConverterCategoryBase } from '../ConverterCategoryBase';

import { CelsiusToFahrenheitConverter } from './CelsiusToFahrenheitConverter';
import { FahrenheitToCelsiusConverter } from "./FahrenheitToCelsiusConverter";

export class TemperatureConverterCategory extends ConverterCategoryBase {
  converters: UnitConverter[] = [];

  constructor(public name = "Temperature converters") {
    super(name);
    this.converters[0] = new CelsiusToFahrenheitConverter('Celsius to Fahrenheit');
    this.converters[1] = new FahrenheitToCelsiusConverter('Fahrenheit to Celsius');
  }
  getIcon(): string {
    return "fas fa-thermometer-half";
  }
}
