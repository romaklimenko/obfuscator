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

    it('obfuscates an positive float number', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 3.141592653589793;

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated).not.toBe(data);
      expect(obfuscated).toBeGreaterThanOrEqual(0);
      expect(obfuscated).toBeLessThan(10);
    });

    it('obfuscates an negative float number', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = -3.141592653589793;

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated).not.toBe(data);
      expect(obfuscated).toBeLessThanOrEqual(0);
      expect(obfuscated).toBeGreaterThan(-10);
    });

    it('obfuscates an positive integer number', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = 1234;

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated).not.toBe(data); // well, it's not 100% sure...
      expect(obfuscated).toBeGreaterThanOrEqual(0);
      expect(obfuscated).toBeLessThanOrEqual(9999);
    });

    it('obfuscates an negative integer number', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = -1234;

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated).not.toBe(data); // well, it's not 100% sure...
      expect(obfuscated).toBeLessThanOrEqual(0);
      expect(obfuscated).toBeGreaterThanOrEqual(-9999);
    });

    it('obfuscates an array', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = [-1234, 'Hello World', true, null];

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      // Assert
      expect(obfuscated.length).toBe(data.length);
      expect(obfuscated[0]).toBeLessThanOrEqual(0);
      expect(obfuscated[0]).toBeGreaterThanOrEqual(-9999);
      expect(obfuscated[1]).not.toBe(data[1]);
      expect((<string>obfuscated[1]).length).toBe((<string>data[1]).length);
      expect(obfuscated[2]).toBe(data[2]);
      expect(obfuscated[3]).toBeNull();
    });

    it('obfuscates an object', () => {
      // Arrange
      const obfuscator = new Obfuscator();
      const data = {
        name: 'Joe Sixpack',
        email: 'joe@sixpack.com',
        age: 42,
        isActive: true,
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
        friends: ['John Doe', 'Mary Jane'],
      };

      // Act
      const obfuscated = obfuscator.obfuscate(data);

      console.log(JSON.stringify(obfuscated, null, 2));

      // Assert
      expect(obfuscated.name).not.toBe(data.name);
      expect(obfuscated.name.length).toBe(data.name.length);
      expect(obfuscated.email).not.toBe(data.email);
      expect(obfuscated.email.length).toBe(data.email.length);
      expect(obfuscated.address.city).not.toBe(data.address.city);
      expect(obfuscated.address.city.length).toBe(data.address.city.length);
      expect(obfuscated.friends.length).toBe(data.friends.length);
    });
  });
});
