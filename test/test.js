"use strict";

var assert = require('assert');
var pvpgn_hash = require('../pvpgn-hash')

describe('PvPGN SHA1 Hash', function () {
    describe('Hash of 12345', function () {
        it('should be 460e0af6c1828a93fe887cbe103d6ca6ab97a0e4 , just like generated from bnpass util', function () {
            assert.equal('460e0af6c1828a93fe887cbe103d6ca6ab97a0e4', pvpgn_hash.get('12345'));
        });
    });
});
