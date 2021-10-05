import { Injectable } from '@angular/core';
import {ConverterCategory,UnitConverter} from '../classes/templates';
import {TemperatureConverterCategory} from '../classes/temperatures/temperatureConvertersCategory';
import {DistanceConverterCategory} from '../classes/distances/DistanceConvertersCategory';
import { WeightConverterCategory } from '../classes/weights/WeightConvertersCategory';
import {CurrencyConverterCategory} from '../classes/currencies/CurrencyConvertersCategory';

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {
  categories: ConverterCategory[]= [];

  constructor() { 
    const temperatureConverterCategory = new TemperatureConverterCategory(); 
    const distanceConverterCategory = new DistanceConverterCategory();
    const weightConverterCategory = new WeightConverterCategory();
    const currencyConverterCategory = new CurrencyConverterCategory();
    this.categories = [
      temperatureConverterCategory,
      distanceConverterCategory,
      weightConverterCategory,
      currencyConverterCategory
    ];
  }

  getCategories(): ConverterCategory[]{
    return this.categories;
  }
}
