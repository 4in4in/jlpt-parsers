import { readFile } from "fs/promises";

export function FileProvider() {
  this.provide = (fname) => readFile(fname, { encoding: "utf-8" });
}
