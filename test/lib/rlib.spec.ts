
import * as rlib from "../../src/lib/rlib";


import * as chai from 'chai';
const expect = chai.expect;

import * as log4js from 'log4js';
const logger = log4js.getLogger();
// logger.level = 'debug';



describe('Array functions', () => {

    context("seq()", () => {

        it('rlib.seq(0) should return [] array.', () => {
            const result: number[] = rlib.seq(0);
            expect(result).to.be.empty;
        });


        it('should be generate a series.', () => {
            const result: number[] = rlib.seq(5);
            const ans: number[] = [0, 1, 2, 3, 4];

            for (let i = 0; i < ans.length; i++) {
                expect(ans[i]).equals(result[i]);
            }
        });

    });

    context("seq()", () => {
        it('should generate a series.', () => {

            const result: number[] = rlib.seq(5);
            const ans: number[] = [0, 1, 2, 3, 4];

            for (let i = 0; i < ans.length; i++) {
                expect(ans[i]).equals(result[i]);
            }
        });

    });



    context("toArray()", () => {
        it('should generate a series from given function.', () => {

            const result: number[] = rlib.toArray(() => { return 1; }, 5);
            const ans: number[] = [1, 1, 1, 1, 1];

            for (let i = 0; i < ans.length; i++) {
                expect(ans[i]).equals(result[i]);
            }
        });

    });




});
