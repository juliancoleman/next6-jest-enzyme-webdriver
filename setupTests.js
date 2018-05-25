const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
// const chromedriver = require("chromedriver");
const fs = require("fs");

require("jsdom-global")();

configure({ adapter: new Adapter() });

// chromedriver.start([
//   "--url-base=/wd/hub",
//   "--httpPort=4444",
//   "--verbose",
// ]);

const screenshotsSaveDir = "./screenshots";

if (!fs.existsSync(screenshotsSaveDir)) {
  fs.mkdirSync(screenshotsSaveDir);
}
