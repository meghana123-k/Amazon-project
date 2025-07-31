import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual("20.95");
    })

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual("0.00");
    })

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual("20.01");
    })
    
})
// console.log(formatCurrency(2095) === '20.95' ? "passed" : "Failed");
// console.log(formatCurrency(0) === '0.00' ? "passed" : "Failed");
// console.log(formatCurrency(2000.5) === '20.01' ? "passed" : "Failed");