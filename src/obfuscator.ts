import obfuscateNumber from './primitives/obfuscate-number';
import obfuscateString from './primitives/obfuscate-string';

export default class Obfuscator {
  public clues: Map<string | number, string | number> = new Map();

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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          result[key] = this.obfuscate((data as any)[key]);
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

    const result = obfuscateString(data);

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
