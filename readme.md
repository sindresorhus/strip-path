# strip-path

> Strip a path from a path

## Install

```
$ npm install strip-path
```

## Usage

```js
import stripPath from 'strip-path';

stripPath('path1/path2/path3/path4', 'path1/path2');
//=> 'path3/path4'
```

## API

### stripPath(path, stripPath)

#### path

*Required*\
Type: `string`  

The path to stripped.

#### stripPath

*Required*\
Type: `string`  

The path to strip from `path`.
