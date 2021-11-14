const FormatFullname = require('../FormatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(FormatFullname(undefined)).to.equal('Error');
        expect(FormatFullname(12)).to.equal('Error');
        expect(FormatFullname()).to.equal('Error');
        expect(FormatFullname([])).to.equal('Error');
        expect(FormatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "fullName" arg is longer or shorter than 2 args', () => {
        expect(FormatFullname('John')).to.equal('Error');
        expect(FormatFullname('John Doe Test')).to.equal('Error');
        expect(FormatFullname('John Frank Doe Kaminsky')).to.equal('Error');
    });

    it('should return an error if "fullName" arg contains prohibited characters', () => {
        expect(FormatFullname('John, Doe')).to.equal('Error');
        expect(FormatFullname('John: Doe')).to.equal('Error');
        expect(FormatFullname('John; Doe')).to.equal('Error');
        expect(FormatFullname('John. Doe')).to.equal('Error');
    });

    it('should return first letter of first and last name as uppercase', () => {
        expect(FormatFullname('joHn dOe')).to.equal('John Doe');
        expect(FormatFullname('JOHN DOE')).to.equal('John Doe');
        expect(FormatFullname('john doe')).to.equal('John Doe');
    });

});