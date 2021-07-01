
const WARN = 1, ERROR = 2;
// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"eqeqeq": [ ERROR, "smart" ],
		"indent": [ ERROR,  "tab"],
		"jsx-quotes": [ ERROR, "prefer-double" ],
		"semi": [ ERROR, "always" ],
		"block-scoped-var": [ ERROR, "always" ],
		// "object-curly-newline": [ ERROR, {
		// 	"ObjectExpression": { "multiline": true, "minProperties": 3, "consistent": true },
		// 	"ObjectPattern": { "multiline": true, "minProperties": 3, "consistent": true },
		// 	"ImportDeclaration": { "multiline": true, "minProperties": 3, "consistent": true },
		// 	"ExportDeclaration": { "multiline": true, "minProperties": 3, "consistent": true },
		// } ],
		"max-len": [ ERROR, {
			"code": 100,
			"ignoreUrls": true,
		} ],
		"no-self-compare": [ ERROR, "always" ],
		"yoda": [ ERROR, "always" ],
	},
	"ignorePatterns": ["config", "scripts"]
};
