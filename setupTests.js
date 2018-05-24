const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const chromedriver = require("chromedriver");
const fs = require("fs");
const childProcess = require("child_process");

require("jsdom-global")();

configure({ adapter: new Adapter() });

const driver = chromedriver.start([
    "--url-base=wd/hub",
    "--httpPort=9515",
]);

const screenshotsSaveDir = "./screenshots";

if (!fs.existsSync(screenshotsSaveDir)) {
  fs.mkdirSync(screenshotsSaveDir);
}

childProcess.exec(`pkill ${driver.pid}`);
chromedriver.stop();
