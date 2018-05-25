import { remote } from "webdriverio";

export default function(port: number, path: string) {
  const opts = {
    // protocol: "http",
    // host: "localhost",
    port: 9515,
    // path: "/",
    services: ["chromedriver"],
    desiredCapabilities: {
      browserName: "chrome",
      chromeOptions: {
        args: [
          "--headless",
        ],
      },
    },
  };

  return remote(opts)
    .init()
    .url(`http://localhost:${port}${path}`);
}
