import React, { useReducer, useState, useEffect } from 'react';
import Header from '../components/Header'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

const Booking = () => {

  const defaultDate = new Date().toLocaleDateString('en-CA');
  const initialTimes = ['5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm'];

  // initialize the date/time when a new, not-previously-selected date is selected
  const initializeNewDate = (selectedDate) => {
    if (!selectedDate) {
      return [{date: defaultDate, times: initialTimes}];
    } else {
      const initialDate = selectedDate ? selectedDate : defaultDate;
      return {date: initialDate, times: initialTimes};
    }
  };

  const [localState, setLocalState] = useState(initializeNewDate);

  const reducer = (state, action) => {
    let newState;
    switch(action.type) {
      case 'add_new_date':
        newState = state.push(action.payload);
        setLocalState(newState);
        break;
      case 'book_time':
        newState = state;
        const objIndex = newState.findIndex((obj => obj.date === action.payload.date));
        newState[objIndex].times = newState[objIndex].times.filter(item => item !== action.payload.time);
        setLocalState(newState);
        break;
      default:
       newState = state;
       break;
    }
    return newState;
  }


  // State will store all available dates and times
  const [state, dispatch] = useReducer(reducer, null, initializeNewDate);
  console.log('STATE: ', state, 'LOCAL STATE: ', localState);

  // availableTimes is used to pass times array as props to booking form for display
  const [availableTimes, setAvailableTimes] = useState();

  const sampleData = [
    {
        date: "2023-06-28",
        times: [
            "5:00pm",
            "6:00pm",
            "7:00pm",
            "8:00pm",
            "9:00pm",
            "10:00pm"
        ]
    },
    {
        date: "2023-06-29",
        times: [
            "5:00pm",
            "6:00pm",
            "7:00pm",
            "8:00pm",
            "9:00pm",
            "10:00pm"
        ]
    }
  ];
  const sampleBooking = {
    date: "2023-06-29",
    time: "8:00pm",
    guests: "1",
    occasion: "Birthday",
    firstName: "J",
    email: "j@dk.com",
    phone: "234"
  };

  // Update available times for a specific date when the form is submitted
  const updateTimes = (booking) => {
    dispatch({type: 'book_time', payload: booking});
    console.log(localState.filter(item => item.date === defaultDate)[0].times);
  }
// updateTimes(sampleBooking);

  useEffect(() => {
    console.log('STATE UPDATED', localState);
    setAvailableTimes(localState.filter(item => item.date === defaultDate)[0].times);
  }, [localState, defaultDate]);

  // Set available times based on selected date from state
  const getTimes = (selectedDate) => {
    console.log('getTimes state: ', localState);
    console.log('getTimes selectedDate: ', selectedDate);

    const result = localState.filter(item => item.date === selectedDate);
    console.log('getTimes result: ', result);
    if (result.length) {
      console.log('getTimes result length: ', result.length);
      setAvailableTimes(result[0].times);
    } else {
      console.log('NO RESULT');
      const newDateData = initializeNewDate(selectedDate);
      dispatch({type: 'add_new_date', payload: newDateData});
      setAvailableTimes(newDateData.times);
    }
  };

  return (
    <div className='page'>
      <Header />
      <BookingForm props={availableTimes} bookingAction={updateTimes} handleDateSelected={getTimes} />
      <Footer />
    </div>
  )
};

export default Booking;