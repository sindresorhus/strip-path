import path from 'node:path';

const rePathSeparatorLeftTrim = new RegExp(`^${path.sep}+`);

export default function stripPath(path_, stripPath) {
	if (!stripPath || stripPath.length === 0) {
		return path_;
	}

	path_ = path.normalize(path_);
	stripPath = path.normalize(stripPath);
	const pos = path_.indexOf(stripPath);
	path_ = pos === -1 ? path_ : path_.slice(pos + stripPath.length, path_.length);
	path_ = path_.replace(rePathSeparatorLeftTrim, '');

	return path_;
}
