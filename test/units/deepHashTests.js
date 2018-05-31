'use strict';

const assert = require('assertthat');

const deepHash = require('../../src/deepHash');

suite('deepHash', () => {
  test('is a function.', async () => {
    assert.that(deepHash).is.ofType('function');
  });

  test('hashes a string.', async () => {
    const hash = deepHash('the native web');

    assert.that(hash).is.equalTo('55a1f59420da66b2c4c87b565660054cff7c2aad5ebe5f56e04ae0f2a20f00a9');
  });

  test('hashes a number.', async () => {
    const hash = deepHash(23);

    assert.that(hash).is.equalTo('535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790');
  });

  test('hashes a boolean.', async () => {
    const hash = deepHash(false);

    assert.that(hash).is.equalTo('fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa');
  });

  test('hashes null.', async () => {
    const hash = deepHash(null);

    assert.that(hash).is.equalTo('74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b');
  });

  test('hashes undefined.', async () => {
    const hash = deepHash(undefined);

    assert.that(hash).is.equalTo('eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c');
  });

  test('hashes an array.', async () => {
    const hash = deepHash([
      'the native web',
      23,
      false
    ]);

    assert.that(hash).is.equalTo([
      '55a1f59420da66b2c4c87b565660054cff7c2aad5ebe5f56e04ae0f2a20f00a9',
      '535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790',
      'fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa'
    ]);
  });

  test('hashes an object.', async () => {
    const hash = deepHash({
      string: 'the native web',
      number: 23,
      boolean: false
    });

    assert.that(hash).is.equalTo({
      string: '55a1f59420da66b2c4c87b565660054cff7c2aad5ebe5f56e04ae0f2a20f00a9',
      number: '535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790',
      boolean: 'fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa'
    });
  });

  test('supports nesting.', async () => {
    const hash = deepHash({
      string: 'the native web',
      values: {
        number: 23,
        boolean: false
      }
    });

    assert.that(hash).is.equalTo({
      string: '55a1f59420da66b2c4c87b565660054cff7c2aad5ebe5f56e04ae0f2a20f00a9',
      values: {
        number: '535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790',
        boolean: 'fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa'
      }
    });
  });

  test('hashes using a secret.', async () => {
    const hash = deepHash({
      string: 'the native web',
      values: {
        number: 23,
        boolean: false
      }
    }, 'secret');

    assert.that(hash).is.equalTo({
      string: '5a2816c2898dba6fed0cdf6fc18663d37c3b3a745025cfa79512c883fed00fd0',
      values: {
        number: 'fc9279bf5ca68807fb3ba6d96f4950fee3be21133b4b915d28c2c40539d53ccc',
        boolean: '260cf02b2f8c51119d619957a56318730a4fb02d5990c9f4fb9a5d4ba89516d9'
      }
    });
  });
});
