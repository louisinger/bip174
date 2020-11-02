/// <reference types="node" />
export declare const fixtures: ({
    description: string;
    before: string;
    inputData: ({
        nonWitnessUtxo: Buffer;
        redeemScript: Buffer;
        bip32Derivation: {
            masterFingerprint: Buffer;
            pubkey: Buffer;
            path: string;
        }[];
        witnessUtxo?: undefined;
        witnessScript?: undefined;
    } | {
        witnessUtxo: {
            script: Buffer;
            value: Buffer;
            asset: Buffer;
            nonce: Buffer;
        };
        redeemScript: Buffer;
        witnessScript: Buffer;
        bip32Derivation: {
            masterFingerprint: Buffer;
            pubkey: Buffer;
            path: string;
        }[];
        nonWitnessUtxo?: undefined;
    })[];
    outputData: {
        bip32Derivation: {
            masterFingerprint: Buffer;
            pubkey: Buffer;
            path: string;
        }[];
    }[];
    after: string;
    cleanForFinalize?: undefined;
} | {
    description: string;
    inputData: {
        sighashType: number;
    }[];
    outputData: never[];
    after: string;
    before?: undefined;
    cleanForFinalize?: undefined;
} | {
    description: string;
    inputData: {
        partialSig: {
            pubkey: Buffer;
            signature: Buffer;
        }[];
    }[];
    outputData: never[];
    after: string;
    before?: undefined;
    cleanForFinalize?: undefined;
} | {
    description: string;
    before: string;
    inputData: {
        partialSig: {
            pubkey: Buffer;
            signature: Buffer;
        }[];
    }[];
    outputData: never[];
    after: string;
    cleanForFinalize?: undefined;
} | {
    description: string;
    cleanForFinalize: boolean;
    before: string;
    inputData: ({
        finalScriptSig: Buffer;
        finalScriptWitness?: undefined;
    } | {
        finalScriptSig: Buffer;
        finalScriptWitness: Buffer;
    })[];
    outputData: never[];
    after: string;
})[];
