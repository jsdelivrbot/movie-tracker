import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import { mountComponent, sel, click } from "../utils/testUtils.js";
import AuthButton from "./AuthButton.jsx";

test.skip("invokes the onClick prop when clicked", () => {
  const toggleAuth = jest.fn();
  let wrapper = mountAuthButton({ toggleAuth });
  let authBtn = wrapper.find(sel("auth-btn"));
  clickButton(authBtn);
  wrapper = mountAuthButton({ toggleAuth });
  let authBtn = wrapper.find(sel("auth-btn"));
  expect(toggleAuth).toHaveBeenCalledTimes(1);
});

const clickButton = input => {
  input.simulate("click");
};

const mountAuthButton = (props = {}) => mount(<AuthButton {...props} />);
