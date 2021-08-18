import path from 'node:path';
import test from 'ava';
import stripPath from './index.js';

test('strip path from a directory path and trim it', t => {
	t.is(stripPath('path1/path2', 'path1'), 'path2');
});

test('strip path from a deep directory path and trim it', t => {
	t.is(stripPath('path1/path2/path3/path4', 'path1/path2'), path.normalize('path3/path4'));
});

test('strip path from a file path and trim it', t => {
	t.is(stripPath('path1/file.ext', 'path1'), 'file.ext');
});

test('strip path from a deep file path and trim it', t => {
	t.is(stripPath('path1/path2/path3/path4/file.ext', 'path1/path2'), path.normalize('path3/path4/file.ext'));
});

test('return the path when no strip arg', t => {
	t.is(stripPath('path1/path2', null), path.normalize('path1/path2'));
});
