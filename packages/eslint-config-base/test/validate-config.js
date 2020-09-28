const eslint = require("eslint");
const test = require("tape");

test("load config in eslint to validate all rule syntax is correct", async function(t) {
  const ESLint = eslint.ESLint;

  const lint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "index.js",
  });

  const code =
    "const foo = 1;\nconst bar = function (foo) {\n  foo + 1;\n};\nbar(foo);\n";

  const result = await lint.lintText(code);
  const errors = ESLint.getErrorResults(result);

  t.equal(errors.length, 0);
  t.end();
});
