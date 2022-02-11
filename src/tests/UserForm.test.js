import React from 'react';
import { render, fireEvent, queryByAttribute   } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from '../App';

test('test form name', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputName = getById(utils.container, 'name')
  const inputHName = getById(utils.container, 'hname')
  
  fireEvent.change(inputName, {target: {value: 'Sara Walawage'}})
  expect(inputName.value).toBe('Sara Walawage')
 
  const spanNameValue = inputHName.innerHTML.trim();
  expect(spanNameValue).toBe('Sara Walawage')
  
})

test('test form email', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const input = getById(utils.container, 'email')
  const inputH = getById(utils.container, 'hemail')
  
  fireEvent.change(input, {target: {value: 'test@gmail.com'}})
  expect(input.value).toBe('test@gmail.com')
 
  const spanValue = inputH.innerHTML.trim();
  expect(spanValue).toBe('test@gmail.com')
  
})

test('test form phone', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputPhone = getById(utils.container, 'phone')
  const inputHPhone = getById(utils.container, 'hphone')
  
  fireEvent.change(inputPhone, {target: {value: '123456'}})
  expect(inputPhone.value).toBe('123456')
 
  const spanPhoneValue = inputHPhone.innerHTML.trim();
  expect(spanPhoneValue).toBe('123456')
  
})

test('test form address1', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputHouseName = getById(utils.container, 'houseName')
  const inputStreet = getById(utils.container, 'street')
  const inputH = getById(utils.container, 'haddress1')
  fireEvent.change(inputHouseName, {target: {value: '15'}})
  expect(inputHouseName.value).toBe('15')
  fireEvent.change(inputStreet, {target: {value: 'Malaya St'}})
  expect(inputStreet.value).toBe('Malaya St')
 
  const spanValue = inputH.innerHTML.trim();
  expect(spanValue).toBe("15   Malaya St")
  
})

test('test form address2', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputSuburb = getById(utils.container, 'suburb')
  const inputState = getById(utils.container, 'state')
  const inputH = getById(utils.container, 'haddress2')
  fireEvent.change(inputSuburb, {target: {value: 'Wynard'}})
  expect(inputSuburb.value).toBe('Wynard')
  fireEvent.change(inputState, {target: {value: 'NSW'}})
  expect(inputState.value).toBe('NSW')
 
  const spanValue = inputH.innerHTML.trim();
  expect(spanValue).toBe("Wynard , NSW")
  
})

test('test form postcode', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const input = getById(utils.container, 'postcode')
  const inputH = getById(utils.container, 'hpostcode')
  
  fireEvent.change(input, {target: {value: '2000'}})
  expect(input.value).toBe('2000')
 
  const spanValue = inputH.innerHTML.trim();
  expect(spanValue).toBe('2000')
  
})

test('test form country', () => {
  const utils = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const input = getById(utils.container, 'country')
  const inputH = getById(utils.container, 'hcountry')
  
  fireEvent.change(input, {target: {value: 'Australia'}})
  expect(input.value).toBe('Australia')
 
  const spanValue = inputH.innerHTML.trim();
  expect(spanValue).toBe('Australia')
  
})