import {randomDigit} from '../random';

export default function obfuscateNumber(data: number): number {
  // TODO: handle Infinity, -Infinity etc.
  if (isNaN(data)) {
    return data;
  }

  let stringData = data.toString();
  let stringResult = '';

  for (let i = 0; i < stringData.length; i++) {
    const char = stringData[i];
    if (char.match(/[.\-+]/)) {
      stringResult += char;
    } else if (char.match(/[0-9]/)) {
      stringResult += randomDigit();
    }
  }

  return Number.parseFloat(stringResult);
}
