/**
 * public void testMultiplication {
 *     Dollar five = new Dollar(5);
 *     five.times(2);
 *     assertEquals(10, five.amount);
 * }
 **/

class Dollar {
    private readonly _amount: number;

    constructor(val?: number) {
        this._amount = val || 10;
    }

    get amount(): number {
        return this._amount;
    }

    times(multiplier: number): number {
        return this.amount * multiplier;
    }

    equals(value: Dollar): boolean {
        return this.amount === value.amount;
    }
}

export default Dollar;