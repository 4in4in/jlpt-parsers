import { parse } from "node-html-parser";

import { FileProvider } from "./app/providers/file.js";
import { WordProcessor } from "./app/processors/word.js";
import { HTTPProvider } from "./app/providers/http.js";

function testProcessWordPage(resourceName, provider) {
  provider
    .provide(resourceName)
    .then((rawHtml) => {
      var html = parse(rawHtml);

      var info = new WordProcessor().process(html);
      console.log(info);
    })
    .catch((e) => console.log("ERROR:", e));
}

function testWordFileProcess(fname) {
  testProcessWordPage(fname, new FileProvider());
}

function testWordHttpProcess(url) {
  testProcessWordPage(url, new HTTPProvider());
}

var { 2: mode } = process.argv;

switch (mode) {
  case "file":
  case undefined:
    testWordFileProcess("test-data/words/kesu.html");
    break;
  case "url":
    testWordHttpProcess(
      "https://jlptsensei.com/learn-japanese-vocabulary/%e6%b6%88%e3%81%99-%e3%81%91%e3%81%99-kesu-meaning/"
    );
    break;
  default:
    throw new Error(`wrong mode: ${mode}`);
}
