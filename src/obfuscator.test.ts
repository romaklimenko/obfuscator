import Obfuscator from './obfuscator';

describe('obfuscator', () => {
  describe('obfuscate', () => {
    it('obfuscates a string', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 'Hello World';

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(obfuscated.length);
      expect(obfuscated[5]).toBe(' ');
      expect(obfuscated).not.toBe(data);
    });

    it('obfuscates a multiline string', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 'Hello\nWorld';

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(obfuscated.length);
      expect(obfuscated[5]).toBe('\n');
      expect(obfuscated).not.toBe(data);
    });

    it('obfuscates an email', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 'support@github.com';

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(obfuscated.length);
      expect(obfuscated[7]).toBe('@');
      expect(obfuscated[14]).toBe('.');
      expect(obfuscated).not.toBe(data);
    });

    xit('TODO: obfuscates a secure URL', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 'https://github.com';

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(obfuscated.length);
      // TODO:
      expect(obfuscated).not.toBe(data);
    });

    xit('TODO: obfuscates an insecure URL', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 'http://dr.dk/';

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(obfuscated.length);
      // TODO:
      expect(obfuscated).not.toBe(data);
    });

    it('obfuscates null', () => {
      // Arrange
      const obfuscator = new Obfuscator();

      // Act
      const obfuscated = obfuscator.obfuscate(null);

      // Assert
      expect(obfuscated).toBe(null);
    });

    it('obfuscates true', () => {
      // Arrange
      const obfuscator = new Obfuscator();

      // Act
      const obfuscated = obfuscator.obfuscate(true);

      // Assert
      expect(obfuscated).toBe(true);
    });

    it('obfuscates false', () => {
      // Arrange
      const obfuscator = new Obfuscator();

      // Act
      const obfuscated = obfuscator.obfuscate(false);

      // Assert
      expect(obfuscated).toBe(false);
    });
  });
});
