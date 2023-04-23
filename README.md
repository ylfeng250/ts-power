# ts-power

组件功能描述

## Install

```bash
$ npm i ts-power --save
```

## Usage

### findLongSetCommonPrefix 获取最长公共前缀

```jsx
import { findLongSetCommonPrefix } from "ts-power";

const strs = ["flower", "flow", "flight"];
const res = findLongSetCommonPrefix(strs); // 'fl'
```
