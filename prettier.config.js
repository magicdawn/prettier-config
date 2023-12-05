/**
 * 2023-12-05
 */

module.exports = {
  // default 80
  printWidth: 100,

  // tab
  tabWidth: 2,
  useTabs: false,

  semi: false,

  // quotes
  singleQuote: true,

  // "as-needed" default, 需要就加
  // 'consistent' 一致
  // "preserve" 保留
  quoteProps: 'consistent',

  // jsx
  // use single even in jsx
  jsxSingleQuote: true,

  // "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
  // "all" - Trailing commas wherever possible (including function arguments).
  // Default value changed from es5 to all in v3.0.0

  // true - Example: { foo: bar }.
  // false - Example: {foo: bar}.
  // default true, use default
  // bracketSpacing: true,

  // default false
  // jsxBracketSameLine: false,

  // "avoid" - Omit parens when possible. Example: x => x
  // "always" - Always include parens. Example: (x) => x
  // arrowParens: 'avoid',

  // "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what's used after the first line)
  // "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
  // "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
  // "cr" - Carriage Return character only (\r), used very rarely
  // default value changed from auto to lf in v2.0.0
  // endOfLine: 'lf',
}
