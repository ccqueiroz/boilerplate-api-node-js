"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIfItsEmail = exports.ucfirst = exports.validateDate = void 0;
var validateDate = function (date) { return isNaN(Date.parse(date)); };
exports.validateDate = validateDate;
var ucfirst = function (fullName) {
    var fullNameArray = fullName.split(' ');
    var newArrayName = fullNameArray.map(function (partialName) {
        if (partialName.length === 2) {
            return partialName;
        }
        var name = partialName.split('');
        name[0] = name[0].toUpperCase();
        name.forEach(function (n, index) {
            if (index === 0) {
                n = n;
            }
            else {
                name[index] = n.toLowerCase();
            }
        });
        return name.join('');
    });
    return newArrayName.join(' ');
};
exports.ucfirst = ucfirst;
var verifyIfItsEmail = function (email) {
    var regexCheck = RegExp(/@(.*)\.com/gmi);
    return regexCheck.test(email);
};
exports.verifyIfItsEmail = verifyIfItsEmail;
