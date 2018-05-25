// import { remote } from "webdriverio";
// import * as chromedriver from "chromedriver";

// export default function(port: number, path: string) {
//   const opts = {
//     protocol: "http",
//     host: "localhost",
//     port: 4444,
//     path: "/",
//     services: ["chromedriver"],
//     desiredCapabilities: {
//       browserName: "chrome",
//       chromeOptions: {
//         args: [
//           "--headless",
//         ],
//       },
//     },
//   };

//   return remote(opts)
//     .init()
//     .once("end", () => { chromedriver.stop() })
//     .url(`http://localhost:${port}${path}`);
// }
