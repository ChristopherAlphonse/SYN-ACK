//https://github.com/ChristopherAlphonse/PassGen/blob/main/src/index.js
export class PassGen {
    private value: number;
    private readonly LEVEL: { [key: string]: number };

    constructor(level: { [key: string]: number }) {
        this.value = 8191;
        this.LEVEL = level;
    }

    hash(key: string, length: number = this.value): number {
        let total = 0;
        for (let char of key) {
            let value = char.charCodeAt(0) - 96;
            total = (total + value) % length;
        }
        return total;
    }

    generateSecret(length: number = 32): string {
        let secret = "";
        let randomSeed;

        while (secret.length < length) {
            randomSeed = crypto.getRandomValues(new Uint8Array(length));
            for (const element of randomSeed) {
                const char = String.fromCharCode(element);

                if (this.validateCharacter(char)) {
                    secret += char;
                }

                if (secret.length === length) {
                    break;
                }
            }
        }

        return secret;
    }

    validateCharacter(char: string): boolean {
        return /[a-zA-Z0-9]/.test(char);
    }

    generateID(): string {
        const u8 = crypto.getRandomValues(
            new Uint8Array(this.LEVEL.Enterprise),
        );
        const randomNumber = Math.floor(Math.random() * this.value);
        const randomBase36 = randomNumber.toString(36);
        const hashValue = this.hash(this.value.toString());
        const genSecret = this.generateSecret();
        const passwords = [hashValue, ...randomBase36, ...u8, ...genSecret]
            .slice(8)
            .join("");
        return passwords;
    }
}

const LEVEL = {
    Enterprise: 35,
    Hobby: 8,
    Developer: 18,
};
