import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HiddenMessage, Fade } from "../";

Enzyme.configure({ adapter: new Adapter() });

describe("<HiddenMessage />", () => {
  afterAll(() => jest.resetAllMocks());

  it("should render the HiddenMessage with the correct `in` prop", () => {
    const wrapper = shallow(<HiddenMessage initialShow={true} />);

    expect(wrapper.find("Fade").props()).toEqual({
      in: true,
      children: <div>Hello world</div>
    });

    wrapper.find("button").simulate("click");

    expect(wrapper.find("Fade").props()).toEqual({
      in: false,
      children: <div>Hello world</div>
    });
  });
});
