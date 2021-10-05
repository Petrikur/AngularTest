export interface UnitConverter {
  getName(): string;
  getInputUnit(): string;
  getOutputUnit(): string;
  convert(inValue: string): string;
}

export interface ConverterCategory {
  getName(): string;
  getIcon(): string;
  getConverters(): UnitConverter[];
  getConverter(name: string): UnitConverter | null;
}
