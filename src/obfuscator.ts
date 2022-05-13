import obfuscateString from './primitives/obfuscate-string';
import { randomChar, randomDigit } from './random';

export default class Obfuscator {
  public clues: Map<any, any> = new Map();

  constructor() {
    //
  }

  public obfuscate(data: any): string {
    if (typeof data === 'string') {
      return this.obfuscateString(data);
    }
    // TODO: number
    // TODO: boolean
    // TODO: null

    // TODO: object
    // TODO: array

    return '';
  }

  private obfuscateString(data: string): string {
    if (this.clues.has(data)) {
      return this.clues.get(data);
    }

    let result = obfuscateString(data);

    this.clues.set(data, result);

    return result;
  }
}