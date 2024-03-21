import { get } from "https";

function getHtmlString(url) {
  return new Promise((resolve, reject) => {
    get(url, (message) => {
      message.setEncoding("utf-8");

      var body = "";
      message.on("data", (chunk) => {
        body += chunk;
      });

      message.on("end", () => {
        resolve(body);
      });
    }).on("error", (e) => {
      reject(e);
    });
  });
}

export function HTTPProvider() {
  this.provide = getHtmlString;
}
