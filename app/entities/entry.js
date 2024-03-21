import { Example } from "./example";
import { Meta } from "./meta";

/**
 * Description placeholder
 * @date 3/21/2024 - 9:11:01 PM
 *
 * @export
 * @param {Meta} meta
 * @param {Array<Example>} examples
 * @returns
 */
export function Entry(meta, examples) {
  this.meta = meta;
  this.examples = examples;
}
