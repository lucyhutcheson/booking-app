import React, { useReducer, useCallback } from 'react';
import Header from '../components/Header'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import { fetchAPI, submitAPI } from '../util/utils';

const updateTimes = (state, action) => {
  if (action.type === 'get_times') return fetchAPI( new Date(action.date));
  return state;
}

const Booking = () => {

  const submitForm = (values) => {
    const response = submitAPI(values);
    if (response) window.location.href = '/confirmed';
  };

  // initialize the date/time when a new, not-previously-selected date is selected
  const initializeTimes = () => {
    const apiTimes = fetchAPI( new Date());
    return apiTimes;
  };

  // State will store all available dates and times
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  // Set available times based on selected date from coursera API
  const getTimes = useCallback((selectedDate) => {
    dispatch({type: 'get_times', date: selectedDate});
  }, []);

  return (
    <div className='page'>
      <Header />
      <BookingForm props={availableTimes} bookingAction={submitForm} handleDateSelected={getTimes} />
      <Footer />
    </div>
  )
};

export default Booking;