import {randomChar, randomDigit} from '../random';

export default function obfuscateString(data: string): string {
  let result = '';

  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    if (char.match(/[.\-+@\s\n/]/)) {
      result += char;
    } else if (char.match(/[0-9]/)) {
      result += randomDigit();
    } else {
      result += randomChar();
    }
  }

  return result;
}
