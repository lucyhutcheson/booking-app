import Booking from './Booking';

import { fetchAPI } from '../util/utils';
const initializeTimes = Booking.initializeTimes;
const updateTimes = Booking.updateTimes;

describe('Booking Form', () => {

  test('return array of available times', () => {
    expect(initializeTimes).not.toBe('');
  });

  test('returns new state for "get_times" type', () => {

    // const initialState = [1];
    // const updateAction = {type: 'get_times', newState: fetchAPI(new Date()) };
    // const updatedState = updateTimes(initialState, updateAction);
    // expect(updatedState).toBeGreaterThan(1);

    // const updateTimes = getTimes(new Date());
    // expect(updateTimes).not.toBe('');

  });

});