// UnitConverterBase.ts

import { UnitConverter } from './templates';

export class UnitConverterBase implements UnitConverter {
  constructor(public name: string) {}

  getName(): string {
    return this.name;
  }
  getInputUnit(): string {
    return 'unit of input';
  }
  getOutputUnit(): string {
    return 'unit of output';
  }
  convert(inValue: string): string {
    return '';
  }
  
}
