// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

// Test isPhoneNumber
test("Test isPhoneNumber True 1", () => {
  expect(isPhoneNumber("408-204-4289")).toBe(true);
});
test("Test isPhoneNumber True 2", () => {
  expect(isPhoneNumber("1-510-222-2311")).toBe(true);
});

test("Test isPhoneNumber False 1", () => {
  expect(isPhoneNumber("232323")).toBe(false);
});

test("Test isPhoneNumber False 2", () => {
  expect(isPhoneNumber("04-4289")).toBe(false);
});

// Test isEmail
test("Test isEmail True 1", () => {
  expect(isEmail("jokan@ucsd.edu")).toBe(true);
});
test("Test isEmail True 2", () => {
  expect(isEmail("josephkan14@gmail.com")).toBe(true);
});

test("Test isEmail False 1", () => {
  expect(isEmail("gmail.com")).toBe(false);
});

test("Test isEmail False 2", () => {
  expect(isEmail("alink")).toBe(false);
});

// Test isStrongPassword
test("Test isStrongPassword True 1", () => {
  expect(isStrongPassword("averystrongpa55")).toBe(true);
});
test("Test isStrongPassword True 2", () => {
  expect(isStrongPassword("strongpAsw0rd")).toBe(true);
});

test("Test isStrongPassword False 1", () => {
  expect(isStrongPassword("<3")).toBe(false);
});

test("Test isStrongPassword False 2", () => {
  expect(isStrongPassword("longggggggggggggg")).toBe(false);
});

// Test isDate
test("Test isDate True 1", () => {
  expect(isDate("03/01/2005")).toBe(true);
});
test("Test isDate True 2", () => {
  expect(isDate("5/6/2024")).toBe(true);
});

test("Test isDate False 1", () => {
  expect(isDate("ab/22/2222")).toBe(false);
});

test("Test isDate False 2", () => {
  expect(isDate("5/3/s")).toBe(false);
});

// Test isHexColor
test("Test isHexColor True 1", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});
test("Test isHexColor True 2", () => {
  expect(isHexColor("#000")).toBe(true);
});

test("Test isHexColor False 1", () => {
  expect(isHexColor("#FAED")).toBe(false);
});

test("Test isHexColor False 2", () => {
  expect(isHexColor("#ZZZZZZ")).toBe(false);
});
