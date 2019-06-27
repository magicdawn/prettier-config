/**
 * 2019-06-27
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

  // "none" - No trailing commas. default
  // "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
  // "all" - Trailing commas wherever possible (including function arguments).
  trailingComma: 'es5',

  // true - Example: { foo: bar }.
  // false - Example: {foo: bar}.
  // default true
  bracketSpacing: false,

  // default false
  // jsxBracketSameLine: false,

  // "avoid" - Omit parens when possible. Example: x => x
  // "always" - Always include parens. Example: (x) => x
  // arrowParens: 'avoid',

  // "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what's used after the first line)
  // "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
  // "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
  // "cr" - Carriage Return character only (\r), used very rarely
  endOfLine: 'lf',
}
