import Dollar from './1-3';

describe("1 - 3장 테스트 실행", () => {
    test('$5 + 10CHF = $10(환율이 2:1일 경우)', () => {
        expect(new Dollar().amount).toBe(10);
    });
    test("$5 X 2 = $10", () => {
        expect(new Dollar(5).times(2)).toBe(10);
    });
    test("Money 반올림?", () => {
        expect().toBe(false);
    });
    test('new Dollar(5).equals(new Dollar(5)는 true', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    })
    test('new Dollar(5).equals(new Dollar(6)는 false', () => {
        expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
    })
})
