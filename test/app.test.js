const sayHello = require('../src/app');

test('returns a greeting with the given name', () => {
  expect(sayHello('DevOps')).toBe('Hello, DevOps!');
});
