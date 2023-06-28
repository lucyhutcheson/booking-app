import React, { useReducer } from 'react';
import Header from '../components/Header'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

const Booking = () => {

  const reducer = (state, action) => {
    if (action.type === "pick_time") return { times: state.times.filter(item => item !== action.payload)}
    return state;
  }

  const initialTimes = {times: ['5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm']};
  const [state, dispatch] = useReducer(reducer, initialTimes);

  const updateTimes = (selectedTime) => {
    dispatch({type: 'pick_time', payload: selectedTime });
  }

  return (
    <div className='page'>
      <Header />
      <BookingForm props={state} bookingAction={updateTimes} />
      <Footer />
    </div>
  )
};

export default Booking;