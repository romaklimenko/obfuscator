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
  });
});