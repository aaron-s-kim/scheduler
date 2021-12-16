import React from "react";
import { render } from "@testing-library/react"; // We import our helper functions from the react-testing-library
import Appointment from 'components/Appointment' // We import the component that we are testing

// group series of tests with describe function
describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});

// Mock Functions
it("calls the function", () => {
  const fn = jest.fn();
  fn();
  expect(fn).toHaveBeenCalledTimes(1);
});

it("calls the function with specific arguments", () => {
  const fn = jest.fn();
  fn(10);
  expect(fn).toHaveBeenCalledWith(10);
});

it("uses the mock implementation", () => {
  const fn = jest.fn((a, b) => 42);
  fn(1, 2);
  expect(fn).toHaveReturnedWith(42);
});