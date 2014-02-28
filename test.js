'use strict';
var assert = require('assert');
var path = require('path');
var stripPath = require('./index');

it('should strip path from a directory path and trim it', function () {
	assert.strictEqual(stripPath('path1/path2', 'path1'), 'path2');
});

it('should strip path from a deep directory path and trim it', function () {
	assert.strictEqual(stripPath('path1/path2/path3/path4', 'path1/path2'), path.normalize('path3/path4'));
});

it('should strip path from a file path and trim it', function () {
	assert.strictEqual(stripPath('path1/file.ext', 'path1'), 'file.ext');
});

it('should strip path from a deep file path and trim it', function () {
	assert.strictEqual(stripPath('path1/path2/path3/path4/file.ext', 'path1/path2'), path.normalize('path3/path4/file.ext'));
});
