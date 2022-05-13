import obfuscateString from './primitives/obfuscate-string';

export default class Obfuscator {
  public clues: Map<string | number, string | number> = new Map();

  constructor() {
    //
  }

  public obfuscate<T extends string | number | boolean | null>(data: T): T {
    if (data === null) {
      return null as T;
    }

    if (typeof data === 'boolean') {
      return data;
    }

    if (typeof data === 'string') {
      return this.obfuscateString(data) as T;
    }

    // TODO: number

    // TODO: object
    // TODO: array

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
}
