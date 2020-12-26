import { unique } from '../src/libs/Utils'; // this will be your custom import
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Unique tests', () => { // the tests container
    it('checking default options', () => { // the single test
        const example = ["asd1","asd1","asd2","asd4"];
        const uniqued = unique(example)
        expect(uniqued).to.be.an('array');

    });
});