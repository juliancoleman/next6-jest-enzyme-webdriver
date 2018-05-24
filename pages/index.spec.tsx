import { mount, shallow } from "enzyme";
import fs from "fs";
// import R from "ramda";
import * as React from "react";

// import filterInt from "../helpers/filterInt";
// import webdriver from "../helpers/next-webdriver";

import Index from "./index";

// const PORT: number = 3000;
// const defaultPort = R.defaultTo(PORT);
// const port: number = defaultPort(filterInt(process.env.PORT));

const one: number = 1;
const once: number = 1;

// let screenshot;

describe("Index page", () => {
  describe("<Index />", () => {
    it("mounts properly", () => {
      const wrapper = shallow(<Index />);

      expect(wrapper.exists()).toBe(true);
    });

    it("contains a single h1", () => {
      const wrapper = shallow(<Index />);

      expect(wrapper.find("h1")).toHaveLength(one);
    });

    describe("#render", () => {
      it("is called only once", () => {
        const spy = jest.spyOn(Index.prototype, "render");
        mount(<Index />);

        expect(spy).toHaveBeenCalledTimes(once);

        spy.mockClear();
      });
    });
  });

  // describe("clicking <Link route='error403' />", () => {
  //   it("should navigate to the error403 page", async () => {
  //     const browser = webdriver(port, "/");

  //     screenshot = await browser.saveScreenshot();
  //     await fs.writeFileSync("./screenshots/index.png", screenshot);

  //     await browser.click("a");

  //     screenshot = await browser.saveScreenshot();
  //     await fs.writeFileSync("./screenshots/error403.png", screenshot);

  //     expect(new URL(await browser.getUrl()).pathname).toBe("/403");

  //     await browser.end();
  //   });
  // });
});
