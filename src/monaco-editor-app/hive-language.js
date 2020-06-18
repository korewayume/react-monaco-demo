// import sqlFormatter from "@/views/sqlFormatter/sqlFormatter";
export function init(monaco) {
  const languageId = 'hive-language';
  const keywords = [
    'ADD', 'ADMIN', 'AFTER', 'ALL', 'ALTER', 'ANALYZE', 'AND', 'ARCHIVE', 'AS', 'ASC', 'AUTHORIZATION', 'BEFORE', 'BETWEEN', 'BOTH', 'BUCKET', 'BUCKETS', 'BY', 'CACHE', 'CASCADE', 'CASE', 'CAST', 'CHANGE', 'CLUSTER', 'CLUSTERED', 'CLUSTERSTATUS', 'COLLECTION', 'COLUMN', 'COLUMNS', 'COMMENT', 'COMMIT', 'COMPACT', 'COMPACTIONS', 'COMPUTE', 'CONCATENATE', 'CONF', 'CONSTRAINT', 'CONTINUE', 'CREATE', 'CROSS', 'CUBE', 'CURRENT', 'CURRENT_DATE', 'CURRENT_TIMESTAMP', 'CURSOR', 'DATA', 'DATABASE', 'DATABASES', 'DATETIME', 'DAY', 'DAYOFWEEK', 'DBPROPERTIES', 'DEFERRED', 'DEFINED', 'DELETE', 'DEPENDENCY', 'DESC', 'DESCRIBE', 'DIRECTORIES', 'DIRECTORY', 'DISABLE', 'DISTINCT', 'DISTRIBUTE', 'DROP', 'ELEM_TYPE', 'ELSE', 'ENABLE', 'END', 'ESCAPED', 'EXCHANGE', 'EXCLUSIVE', 'EXISTS', 'EXPLAIN', 'EXPORT', 'EXTENDED', 'EXTERNAL', 'EXTRACT', 'FETCH', 'FIELDS', 'FILE', 'FILEFORMAT', 'FIRST', 'FLOOR', 'FOLLOWING', 'FOR', 'FOREIGN', 'FORMAT', 'FORMATTED', 'FROM', 'FULL', 'FUNCTION', 'FUNCTIONS', 'GRANT', 'GROUP', 'GROUPING', 'HAVING', 'HOLD_DDLTIME', 'HOUR', 'IDXPROPERTIES', 'IF', 'IGNORE', 'IMPORT', 'IN', 'INDEX', 'INDEXES', 'INNER', 'INPATH', 'INPUTDRIVER', 'INPUTFORMAT', 'INSERT', 'INTERSECT', 'INTERVAL', 'INTO', 'IS', 'ITEMS', 'JAR', 'JOIN', 'KEY', 'KEYS', 'KEY_TYPE', 'LATERAL', 'LEFT', 'LESS', 'LIKE', 'LIMIT', 'LINES', 'LOAD', 'LOCAL', 'LOCATION', 'LOCK', 'LOCKS', 'LOGICAL', 'LONG', 'MACRO', 'MAPJOIN', 'MATERIALIZED', 'MINUS', 'MINUTE', 'MONTH', 'MORE', 'MSCK', 'NONE', 'NOSCAN', 'NOVALIDATE', 'NOT', 'NO_DROP', 'OF', 'OFFLINE', 'ON', 'ONLY', 'OPTION', 'OR', 'ORDER', 'OUT', 'OUTER', 'OUTPUTDRIVER', 'OUTPUTFORMAT', 'OVER', 'OVERWRITE', 'OWNER', 'PARTIALSCAN', 'PARTITION', 'PARTITIONED', 'PARTITIONS', 'PERCENT', 'PLUS', 'PRECEDING', 'PRECISION', 'PRESERVE', 'PRETTY', 'PRIMARY', 'PRINCIPALS', 'PROCEDURE', 'PROTECTION', 'PURGE', 'RANGE', 'READ', 'READONLY', 'READS', 'REBUILD', 'RECORDREADER', 'RECORDWRITER', 'REDUCE', 'REFERENCES', 'REGEXP', 'RELOAD', 'RENAME', 'REPAIR', 'REPLACE', 'RESTRICT', 'REVOKE', 'REWRITE', 'RIGHT', 'RLIKE', 'ROLE', 'ROLES', 'ROLLBACK', 'ROLLUP', 'ROW', 'ROWS', 'SCHEMA', 'SCHEMAS', 'SECOND', 'SELECT', 'SEMI', 'SERDEPROPERTIES', 'SERVER', 'SET', 'SETS', 'SHARED', 'SHOW', 'SHOW_DATABASE', 'SKEWED', 'SORT', 'SORTED', 'SSL', 'START', 'STATISTICS', 'STORED', 'STREAMTABLE', 'SYNC', 'TABLE', 'TABLES', 'TABLESAMPLE', 'TBLPROPERTIES', 'TEMPORARY', 'TERMINATED', 'THEN', 'TO', 'TOUCH', 'TRANSACTIONAL', 'TRANSACTIONS', 'TRANSFORM', 'TRIGGER', 'TRUNCATE', 'UNARCHIVE', 'UNBOUNDED', 'UNDO', 'UNION', 'UNIQUEJOIN', 'UNLOCK', 'UNSET', 'UNSIGNED', 'UTC_TIMESTAMP', 'UPDATE', 'URI', 'USE', 'USER', 'USING', 'UTC', 'UTCTIMESTAMP', 'VALUES', 'VALUE_TYPE', 'VIEW', 'VIEWS', 'WHEN', 'WHERE', 'WHILE', 'WINDOW', 'WITH', 'YEAR'
  ];
  const constants = ['FALSE', 'NULL', 'TRUE'];
  const functions = [
    'ABS', 'ACOS', 'ADD_MONTHS', 'AES_DECRYPT', 'AES_ENCRYPT', 'ARRAY', 'ARRAY_CONTAINS', 'ASCII', 'ASIN', 'ATAN', 'AVG', 'BASE64', 'BIN', 'BINARY', 'BROUND', 'CAST', 'CBRT', 'CEIL', 'CEILING', 'COALESCE', 'COLLECT_LIST', 'COLLECT_SET', 'CONCAT', 'CONCAT_WS', 'CONTEXT_NGRAMS', 'CONV', 'CORR', 'COS', 'COVAR_POP', 'COVAR_SAMP', 'COUNT', 'CRC32', 'CREATE_UNION', 'CUME_DIST', 'CURRENT_DATABASE', 'CURRENT_DATE', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'DATE_ADD', 'DATE_FORMAT', 'DATE_SUB', 'DATEDIFF', 'DAY', 'DAYOFMONTH', 'DECODE', 'DEGREES', 'DENSE_RANK', 'E', 'ENCODE', 'EXP', 'EXPLODE', 'FACTORIAL', 'FIND_IN_SET', 'FIRST_VALUE', 'FLOOR', 'FORMAT_NUMBER', 'FROM_UNIXTIME', 'FROM_UTC_TIMESTAMP', 'GET_JSON_OBJECT', 'GREATEST', 'HASH', 'HEX', 'HISTOGRAM_NUMERIC', 'HOUR', 'IF', 'IN_FILE', 'INLINE', 'INSTR', 'INITCAP', 'ISNOTNULL', 'ISNULL', 'JAVA_METHOD', 'JSON_TUPLE', 'LAG', 'LAST_DAY', 'LAST_VALUE', 'LEAD', 'LEAST', 'LENGTH', 'LEVENSHTEIN', 'LCASE', 'LN', 'LOCATE', 'LOG', 'LOG10', 'LOG2', 'LOWER', 'LPAD', 'LTRIM', 'MAP', 'MAP_KEYS', 'MAP_VALUES', 'MAX', 'MD5', 'MIN', 'MINUTE', 'MONTH', 'MONTHS_BETWEEN', 'NAMED_STRUCT', 'NEGATIVE', 'NEXT_DAY', 'NGRAMS', 'NTILE', 'NVL', 'PARSE_URL', 'PARSE_URL_TUPLE', 'PERCENT_RANK', 'PERCENTILE', 'PERCENTILE_APPROX', 'PI', 'PMOD', 'POSEXPLODE', 'POSITIVE', 'POW', 'POWER', 'PRINTF', 'QUARTER', 'RADIANS', 'RAND', 'RANK', 'REFLECT', 'REGEXP_EXTRACT', 'REGEXP_REPLACE', 'REPEAT', 'REVERSE', 'ROUND', 'ROW_NUMBER', 'RPAD', 'RTRIM', 'SECOND', 'SHA', 'SHA1', 'SHA2', 'SHIFTLEFT', 'SHIFTRIGHT', 'SHIFTRIGHTUNSIGNED', 'SIGN', 'SIN', 'SIZE', 'SORT_ARRAY', 'SQRT', 'STACK', 'STDDEV_POP', 'STDDEV_SAMP', 'STRUCT', 'SENTENCES', 'SOUNDEX', 'SPACE', 'SPLIT', 'STR_TO_MAP', 'SUBSTR', 'SUBSTRING', 'SUBSTRING_INDEX', 'SUM', 'TAN', 'TO_DATE', 'TO_UTC_TIMESTAMP', 'TRANSLATE', 'TRIM', 'TRUNC', 'UCASE', 'UNBASE64', 'UNHEX', 'UNIX_TIMESTAMP', 'UPPER', 'VAR_POP', 'VAR_SAMP', 'VARIANCE', 'WEEKOFYEAR', 'XPATH', 'XPATH_BOOLEAN', 'XPATH_DOUBLE', 'XPATH_FLOAT', 'XPATH_INT', 'XPATH_LONG', 'XPATH_NUMBER', 'XPATH_SHORT', 'XPATH_STRING', 'YEAR'
  ];
  const types = ['ARRAY', 'BIGINT', 'BINARY', 'BOOLEAN', 'CHAR', 'DATE', 'DECIMAL', 'DELIMITED', 'DOUBLE', 'FLOAT', 'INT', 'INTEGER', 'JSONFILE', 'MAP', 'NUMERIC', 'PRECISION', 'RCFILE', 'SEQUENCEFILE', 'SERDE', 'SMALLINT', 'STRING', 'STRUCT', 'TEXTFILE', 'TIME', 'TIMESTAMP', 'TINYINT', 'UNIONTYPE', 'VARCHAR'];

  const languageConfiguration = {
    comments: {
      lineComment: '--',
      blockComment: ['/*', '*/'],
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      {open: '{', close: '}'},
      {open: '[', close: ']'},
      {open: '(', close: ')'},
      {open: '"', close: '"'},
      {open: '\'', close: '\''},
      {open: '`', close: '`'},
    ],
    surroundingPairs: [
      {open: '{', close: '}'},
      {open: '[', close: ']'},
      {open: '(', close: ')'},
      {open: '"', close: '"'},
      {open: '\'', close: '\''},
      {open: '`', close: '`'},
    ],
  };

  const monarchTokensProvider = {
    defaultToken: 'source',
    tokenPostfix: '.sql',
    ignoreCase: true,
    brackets: [
      {open: '[', close: ']', token: 'delimiter.square'},
      {open: '(', close: ')', token: 'delimiter.parenthesis'},
      {open: '{', close: '}', token: 'delimiter.curly'},
    ],
    keyword: keywords,
    constant: constants,
    function: functions,
    type: types,
    tokenizer: {
      root: [
        {include: '@comment'},
        {include: '@numeric'},
        [/\w+/, {
          cases: {
            '@keyword': 'keyword',
            '@function': 'function',
            '@constant': 'constant',
            '@type': 'type',
          },
        }],
        {include: '@string'},
        {include: '@operator'},
      ],
      string: [
        [/".*?"/, 'string'],
        [/'.*?'/, 'string'],
        [/`.*?`/, 'string.unicode']
      ],
      numeric: [
        [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/, 'numeric']
      ],
      operator: [
        [/\+|-|\/|\/\/|%|<@>|@>|<@|&|\^|~|<|>|<=|=>|==|!=|<>|=/, 'operator'],
      ],
      comment: [
        [/--.*$/, 'comment.line'],
        [/\/\*/, 'comment.block', '@comment.content'],
      ],
      "comment.content": [
        [/[^/*]+/, 'comment.block'],
        [/\/\*/, 'comment.block', '@push'],    // nested comment
        ["\\*/", 'comment.block', '@pop'],
        [/[/*]/, 'comment.block'],
      ],
    },
  };

  const themeDefinition = {
    base: 'vs',
    inherit: false,
    rules: [
      {token: 'source', foreground: '4D4D4C'},
      {token: 'keyword', foreground: '8959A8'},
      {token: 'constant', foreground: 'F5871F'},
      {token: 'function', foreground: '4271AE'},
      {token: 'type', foreground: '8959A8'},
      {token: 'string', foreground: '718C00'},
      {token: 'string.unicode', foreground: '008c5c'},
      {token: 'numeric', foreground: 'F5871F'},
      {token: 'operator', foreground: '3E999F'},
      {token: 'comment', foreground: '8E908C'},
    ]
  };

  const suggestions = [
    {
      label: 'SELECT',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'SELECT'
    },
    {
      label: 'NULL',
      kind: monaco.languages.CompletionItemKind.Constant,
      insertText: 'NULL'
    },
    {
      label: 'BOOLEAN',
      kind: monaco.languages.CompletionItemKind.Class,
      insertText: 'BOOLEAN'
    },
    {
      label: 'ABS',
      documentation: "abs",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: 'ABS'
    }
  ];

  monaco.languages.register({id: languageId});

  monaco.languages.setLanguageConfiguration(languageId, languageConfiguration);

  monaco.languages.setMonarchTokensProvider(languageId, monarchTokensProvider);

  monaco.editor.defineTheme(languageId, themeDefinition);

  monaco.languages.registerCompletionItemProvider(languageId, {
    provideCompletionItems: function () {
      return {
        suggestions: suggestions
      };
    }
  });

  monaco.languages.registerHoverProvider(languageId, {
    provideHover: function (model, position) {

      const hoverWord = model.getWordAtPosition(position);
      if (hoverWord) {
        return {
          range: new monaco.Range(position.lineNumber, hoverWord.startColumn, position.lineNumber, hoverWord.endColumn),
          contents: [
            {value: hoverWord.word},
            {value: '```html\ndocumentation\n```'}
          ]
        }
      }
    }
  });

// monaco.languages.registerDocumentFormattingEditProvider(languageId, {
//   provideDocumentFormattingEdits: function (model) {
//     let range = model.getFullModelRange();
//     let value = model.getValue();
//     let newValue = sqlFormatter.format(value);
//     return [
//       {
//         range: range,
//         text: newValue,
//       },
//     ];
//   },
// });
}
