import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingConfirmed = () => {
  return (
    <div className='page'>
      <Header />
      <main className='booking bg-green white'>
        <div className='container narrow text-center'>
          <h1>Booking Confirmed</h1>
          <p className='lead'><strong>Thank you for making a reservation at the Little Lemon Restaurant.</strong></p>
          <p>We will send a reminder of your reservation to the email or phone number provided. Feel free to contact us if you need to make a change to your reservation.</p>
          <h3>Cheers!</h3>
          <p><a href='/' className='button'>Back to Home</a></p>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default BookingConfirmed;

