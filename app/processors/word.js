import { Example } from "../entities/example.js";
import { Entry } from "../entities/entry.js";
import { Meta } from "../entities/meta.js";

/**
 * Description placeholder
 * @date 3/21/2024 - 9:05:57 PM
 *
 * @param {HTMLElement} root
 * @returns {Array<Entry>}
 */
function getExamples(root) {
  var elems = root.querySelectorAll(".example-cont");
  var proc = (raw) => raw.innerText.trim();

  var result = new Array(elems.length);

  elems.forEach((elem, idx) => {
    var jp = elem.querySelector(".jp");

    var { 0: furigana, 1: romaji, 2: english } = elem.querySelectorAll(".show");

    var currentExample = new Example(
      proc(jp),
      proc(furigana),
      proc(romaji),
      proc(english)
    );
    result[idx] = currentExample;
  });
  return result;
}

/**
 * Description placeholder
 * @date 3/21/2024 - 9:08:10 PM
 *
 * @param {HTMLElement} root
 * @returns {Meta}
 */
function getMeta(root) {
  var entryHeader = root.querySelector(".entry-header");
  var jp = entryHeader.querySelector(".jp");

  var entryContent = root.querySelector(".entry-content");
  var definition = entryContent.querySelector(".eng-definition");
  var x = entryContent.querySelectorAll(".goi-notes > ul > li");

  return new Meta(
    jp.innerText,
    definition.innerText.trim(),
    x.map((e) => e.innerText)
  );
}

/**
 * Description placeholder
 * @date 3/21/2024 - 9:08:42 PM
 *
 * @param {HTMLElement} root
 * @returns {Entry}
 */
function processHtmlString(root) {
  var meta = getMeta(root);
  var examples = getExamples(root);

  return new Entry(meta, examples);
}

/**
 * Word Processor
 * @date 3/21/2024 - 9:03:51 PM
 * @constructor
 * @export
 * @returns
 */
export function WordProcessor() {
  this.process = processHtmlString;
}
