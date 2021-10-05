// ConverterCategoryBase.ts

import { ConverterCategory, UnitConverter } from "./templates";

export class ConverterCategoryBase implements ConverterCategory {
         converters: UnitConverter[] = [];

         constructor(public name: string) {}

         getName(): string {
           return this.name;
         }
         getIcon(): string {
           return "";
         }
         getConverters(): UnitConverter[] {
           return this.converters;
         }
         getConverter(name: string): UnitConverter | null {
           for (let i = 0; i < this.converters.length; i++) {
             if (this.converters[i].getName() === name)
               return this.converters[i];
           }
           return null;
         }
       }
