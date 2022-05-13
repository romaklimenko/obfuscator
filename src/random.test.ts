import {randomChar, randomDigit} from './random';

describe('random', () => {
  describe('randomChar', () => {
    it('should return a random char', () => {
      // Arrange
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const samples = Math.pow(chars.length, 2);
      const deviation = samples * 0.1;

      const map = new Map();
      for (const char of chars) {
        map.set(char, 0);
      }

      // Act
      for (let i = 0; i < chars.length * samples; i++) {
        const char = randomChar();
        map.set(char, map.get(char) + 1);
      }

      // Assert
      for (const key of map.keys()) {
        const count = map.get(key);
        expect(count).toBeGreaterThan(samples - deviation);
        expect(count).toBeLessThan(samples + deviation);
      }
    });
  });

  describe('randomDigit', () => {
    it('should return a random char', () => {
      // Arrange
      const chars = '0123456789';
      const samples = Math.pow(chars.length, 3);
      const deviation = samples * 0.1;

      const map = new Map();
      for (const char of chars) {
        map.set(char, 0);
      }

      // Act
      for (let i = 0; i < chars.length * samples; i++) {
        const char = randomDigit();
        map.set(char, map.get(char) + 1);
      }

      // Assert
      for (const key of map.keys()) {
        const count = map.get(key);
        expect(count).toBeGreaterThan(samples - deviation);
        expect(count).toBeLessThan(samples + deviation);
      }
    });
  });
});
