const dummyPubkey = (): Buffer =>
  Buffer.from(
    '03b1341ccba7683b6af4f1238cd6e97e7167d569fac47f1e48d47541844355bd46',
    'hex',
  );
const dummySig = (): Buffer =>
  Buffer.from(
    '304302200424b58effaaa694e1559ea5c93bbfd4a89064224055cdf070b6' +
      '771469442d07021f5c8eb0fea6516d60b8acb33ad64ede60e8785bfb3aa9' +
      '4b99bdf86151db9a9a01',
    'hex',
  );
const dummy4Byte = (): Buffer => Buffer.from([1, 2, 3, 4]);

export const fixtures = {
  valid: [
    {
      method: 'fromTransaction',
      addInputOutput: false,
      args: [Buffer.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0])],
      expected: 'cHNidP8BAAoBAAAAAAAAAAAAAAAA',
    },
    {
      method: 'fromTransaction',
      addInputOutput: false,
      args: [
        Buffer.from([1, 2]),
        (txBuf: any): any => ({
          inputCount: txBuf[0],
          outputCount: txBuf[1],
        }),
      ],
      expected: 'cHNidP8BAAIBAgAAAAA=',
    },
    {
      method: 'addNonWitnessUtxoToInput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2G' +
        'AwAAAAD/////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABAAMB' +
        'AgMAAA==',
    },
    {
      method: 'addWitnessUtxoToInput',
      addInputOutput: true,
      args: [0, { script: Buffer.from([1, 2, 3]), value: 1234567890 }],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABAQzSApZJAAAA' +
        'AAMBAgMAAA==',
    },
    {
      method: 'addPartialSigToInput',
      addInputOutput: true,
      twice: true,
      args: [0, { pubkey: dummyPubkey(), signature: dummySig() }],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAiAgOxNBzLp2g7' +
        'avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RkYwQwIgBCS1jv+qppThVZ6lyTu/1KiQZCJA' +
        'Vc3wcLZ3FGlELQcCH1yOsP6mUW1guKyzOtZO3mDoeFv7OqlLmb34YVHbmpoBIgIDsf8c' +
        'y6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9So' +
        'kGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQAA',
    },
    {
      method: 'addSighashTypeToInput',
      addInputOutput: true,
      args: [0, 1],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABAwQBAAAAAAA=',
    },
    {
      method: 'addRedeemScriptToInput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABBAMBAgMAAA==',
    },
    {
      method: 'addWitnessScriptToInput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABBQMBAgMAAA==',
    },
    {
      method: 'addBip32DerivationToInput',
      addInputOutput: true,
      args: [
        0,
        {
          masterFingerprint: dummy4Byte(),
          path: 'm/3',
          pubkey: dummyPubkey(),
        },
      ],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAiBgOxNBzLp2g7' +
        'avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RggBAgMEAwAAAAAA',
    },
    {
      method: 'addFinalScriptSigToInput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABBwMBAgMAAA==',
    },
    {
      method: 'addFinalScriptWitnessToInput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABCAMBAgMAAA==',
    },
    {
      method: 'addPorCommitmentToInput',
      addInputOutput: true,
      args: [0, 'test'],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAABCQR0ZXN0AAA=',
    },
    {
      method: 'addRedeemScriptToOutput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAAQADAQIDAA==',
    },
    {
      method: 'addWitnessScriptToOutput',
      addInputOutput: true,
      args: [0, Buffer.from([1, 2, 3])],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAAQEDAQIDAA==',
    },
    {
      method: 'addBip32DerivationToOutput',
      addInputOutput: true,
      twice: true,
      args: [
        0,
        {
          masterFingerprint: dummy4Byte(),
          path: 'm/3',
          pubkey: dummyPubkey(),
        },
      ],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAIgIDsTQcy6do' +
        'O2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYIAQIDBAMAAAAiAgOx/xzLp2g7avTxI4zW' +
        '6X5xZ9Vp+sR/HkjUdUGEQ1W9RggBAgMEAwAAAAA=',
    },
    {
      method: 'addKeyValToGlobal',
      addInputOutput: true,
      args: [{ key: Buffer.from([255]), value: Buffer.from([255]) }],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAH/Af8AAAA=',
    },
    {
      method: 'addKeyValToInput',
      addInputOutput: true,
      args: [0, { key: Buffer.from([255]), value: Buffer.from([255]) }],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAB/wH/AAA=',
    },
    {
      method: 'addKeyValToOutput',
      addInputOutput: true,
      args: [0, { key: Buffer.from([255]), value: Buffer.from([255]) }],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAAf8B/wA=',
    },
    {
      method: 'addInput',
      addInputOutput: true,
      switchTx: true,
      args: [
        { wow: 0 },
        (data: any, txBuf: Buffer): Buffer => txBuf.slice(data.wow),
      ],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAAAA=',
    },
    {
      method: 'addOutput',
      addInputOutput: true,
      args: [
        { wow: 0 },
        false,
        (data: any, txBuf: Buffer): Buffer => txBuf.slice(data.wow),
      ],
      expected:
        'cHNidP8BAFMBAAAAAdSnb/ld4fTAFho+U+qHapHtlTMa6NAS2B+XE4SYzl2GAwAAAAD/' +
        '////AdIClkkAAAAAF6kU4Yhw8sKX+/ylTFxvZFx3RaW2btqHAAAAAAAAAAA=',
    },
  ],
  invalid: [
    {
      method: 'addNonWitnessUtxoToInput',
      addInputOutput: true,
      twice: false,
      args: [0, 'blah'],
      exception: 'nonWitnessUtxo should be a Buffer of a Transaction',
    },
    {
      method: 'addNonWitnessUtxoToInput',
      addInputOutput: true,
      twice: true,
      args: [0, dummy4Byte()],
      exception: 'Input #0 already has a Utxo attribute',
    },
    {
      method: 'addWitnessUtxoToInput',
      addInputOutput: true,
      args: [0, { scripty: Buffer.from([1, 2, 3]), vyalue: 1234567890 }],
      exception: 'witnessUtxo should be { script: Buffer; value: number; }',
    },
    {
      method: 'addWitnessUtxoToInput',
      addInputOutput: true,
      twice: true,
      args: [0, { script: Buffer.from([1, 2, 3]), value: 1234567890 }],
      exception: 'Input #0 already has a Utxo attribute',
    },
    {
      method: 'addPartialSigToInput',
      addInputOutput: true,
      args: [0, { pubkdey: dummyPubkey(), signdature: dummySig() }],
      exception: 'partialSig should be { pubkey: Buffer; signature: Buffer; }',
    },
    {
      method: 'addSighashTypeToInput',
      addInputOutput: true,
      args: [0, 'a'],
      exception: 'sighashType should be a number',
    },
    {
      method: 'addRedeemScriptToInput',
      addInputOutput: true,
      args: [0, 'a'],
      exception: 'redeemScript should be a Buffer',
    },
    {
      method: 'addWitnessScriptToInput',
      addInputOutput: true,
      args: [0, 'a'],
      exception: 'witnessScript should be a Buffer',
    },
    {
      method: 'addBip32DerivationToInput',
      addInputOutput: true,
      args: [
        0,
        {
          a: 1,
        },
      ],
      exception:
        'bip32Derivation should be { masterFingerprint: Buffer; pubkey: ' +
        'Buffer; path: string; }',
    },
    {
      method: 'addFinalScriptSigToInput',
      addInputOutput: true,
      args: [0, 8],
      exception: 'finalScriptSig should be a Buffer',
    },
    {
      method: 'addFinalScriptWitnessToInput',
      addInputOutput: true,
      args: [0, 8],
      exception: 'finalScriptWitness should be a Buffer',
    },
    {
      method: 'addPorCommitmentToInput',
      addInputOutput: true,
      args: [0, 8],
      exception: 'porCommitment should be a string',
    },
    {
      method: 'addRedeemScriptToOutput',
      addInputOutput: true,
      args: [0, 8],
      exception: 'redeemScript should be a Buffer',
    },
    {
      method: 'addWitnessScriptToOutput',
      addInputOutput: true,
      args: [0, 8],
      exception: 'witnessScript should be a Buffer',
    },
    {
      method: 'addBip32DerivationToOutput',
      addInputOutput: true,
      args: [
        0,
        {
          a: 8,
        },
      ],
      exception:
        'bip32Derivation should be { masterFingerprint: Buffer; pubkey: ' +
        'Buffer; path: string; }',
    },
    {
      method: 'addInput',
      addInputOutput: true,
      args: [{ wow: 1 }],
      exception:
        'If inputData is not a TransactionInput object, you must pass a ' +
        'function to handle it.',
    },
    {
      method: 'addOutput',
      addInputOutput: true,
      args: [{ wow: 1 }],
      exception:
        'If outputData is not a TransactionOutput object, you must pass a ' +
        'function to handle it.',
    },
    {
      method: 'addOutput',
      addInputOutput: true,
      dupeTx: true,
      args: [
        { wow: 0 },
        false,
        (data: any, txBuf: Buffer): Buffer => txBuf.slice(data.wow),
      ],
      exception: 'Extract Transaction: Expected one Transaction, got 2',
    },
    {
      method: 'addRedeemScriptToInput',
      addInputOutput: true,
      args: [12, dummy4Byte()],
      exception: 'No input #12',
    },
    {
      method: 'addRedeemScriptToOutput',
      addInputOutput: true,
      args: [12, dummy4Byte()],
      exception: 'No output #12',
    },
    {
      method: 'addKeyValToGlobal',
      addInputOutput: true,
      args: [{ key: Buffer.from([0]), value: Buffer.from([255]) }],
      exception: 'Use the method for your specific key instead of addKeyVal*',
    },
    {
      method: 'addKeyValToGlobal',
      addInputOutput: true,
      twice: true,
      args: [{ key: Buffer.from([255]), value: Buffer.from([255]) }],
      exception: 'Duplicate Key: ff',
    },
  ],
};