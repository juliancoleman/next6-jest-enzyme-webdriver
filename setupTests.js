const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const fs = require("fs");

require("jsdom-global")();

configure({ adapter: new Adapter() });

const screenshotsSaveDir = "./screenshots";

if (!fs.existsSync(screenshotsSaveDir)) {
  fs.mkdirSync(screenshotsSaveDir);
}
