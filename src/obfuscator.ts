import obfuscateNumber from './primitives/obfuscate-number';
import obfuscateString from './primitives/obfuscate-string';

export default class Obfuscator {
  public clues: Map<string | number, string | number> = new Map();
  public ignoredFields = new Set();
  private values = new Set();

  constructor() {
    //
  }

  public obfuscate<T extends string | number | boolean | null | object>(
    data: T
  ): T {
    if (data === null) {
      return null as T;
    }

    if (typeof data === 'boolean') {
      return data;
    }

    if (typeof data === 'string') {
      return this.obfuscateString(data) as T;
    }

    if (typeof data === 'number') {
      return this.obfuscateNumber(data) as T;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.obfuscate(item)) as T;
    }

    if (typeof data === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = {};

      for (const key of Object.keys(data)) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          result[key] = this.ignoredFields.has(key)
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (data as any)[key]
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
              this.obfuscate((data as any)[key]);
        }
      }
      return result;
    }

    throw new Error('Unsupported type');
  }

  private obfuscateString(data: string): string {
    if (this.clues.has(data)) {
      return this.clues.get(data) as string;
    }

    let result = obfuscateString(data);

    while (this.values.has(result)) {
      console.warn(
        `Value ${result} generated for ${data} already exists. Regenerating...`
      );
      result = obfuscateString(data);
    }

    this.values.add(result);

    this.clues.set(data, result);

    return result;
  }

  private obfuscateNumber(data: number): number {
    if (this.clues.has(data)) {
      return this.clues.get(data) as number;
    }

    const result = obfuscateNumber(data);

    this.clues.set(data, result);

    return result;
  }
}
