import React, { useRef, useState } from 'react';
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
  useNumberInput
} from "@chakra-ui/react";
import * as Yup from 'yup';

const BookingForm = ({ props, bookingAction, handleDateSelected }) => {

  // Handle dynamic time availablity based on selected date
  const defaultDate = new Date().toLocaleDateString('en-CA');
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const handleOnChange = (event) => {
    if (event.target.id === 'date') {
      setSelectedDate(event.target.value);
      handleDateSelected(event.target.value);
    }
  };

  // Setup form functionality with Formik
  const formik = useFormik({
    initialValues: {
      date: defaultDate,
      time: '',
      guests: '1',
      occasion: 'Birthday',
      firstName: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      bookingAction(values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number().required('Required'),
      firstName: Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
      occasion: Yup.string().required('Required'),
    })
  });

  // Handle number of guests numerical function
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 8
  });
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <main className='booking bg-green white'>
      <div className='container narrow'>
        <h1 className='yellow'>Book Your Table</h1>
        <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
          <VStack spacing={4}>
               <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Choose Date</FormLabel>
                <Input
                  placeholder="Select Date"
                  size="md"
                  id="date"
                  name="date"
                  type="date"
                  value={selectedDate}
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="time">Choose Time</FormLabel>
                <Select
                  id="time"
                  name="time"
                  placeholder='Select time'
                  {...formik.getFieldProps("time")}
                >
                  {props && props.map((time, index) => <option key={index}>{time}</option>)}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <HStack maxW='320px'>
                  <Button {...dec}>-</Button>
                  <Input {...input} id="guests" />
                  <Button {...inc}>+</Button>
                </HStack>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  placeholder='Select occasion'
                >
                  <option value='Birthday'>Birthday</option>
                  <option value='Anniversary'>Anniversary</option>
                  <option value='Graduation'>Graduation</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder='First LastName'
                  value={formik.values.firstName}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='user@email.com'
                  value={formik.values.email}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder='123-456-7890'
                  value={formik.values.phone}
                  {...formik.getFieldProps("phone")}
                />
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>

              <Button type="submit" width="full">
                Make Your Reservation
              </Button>
            </VStack>
        </form>
      </div>
    </main>
  )
};

export default BookingForm;