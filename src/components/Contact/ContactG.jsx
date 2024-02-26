import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";

function ContactG() {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_CONTACT', payload: { ...formValues } });
    setFormValues({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Button
        style={{
          position: 'absolute',
          top: 70,
          left: '10%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 'large',
          textShadow: '9px 2px 9px white',
        }}
      >
      </Button>

      <form className='guest-form' onSubmit={handleSubmit}>
        <h1 style={{
          color: '',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: 'Dancing Script, cursive',
        }}>Ready to take the first step towards a life of purpose, fulfillment, and abundance? Let's embark on this transformative journey together.Lets Get Started!</h1>

        <TextField
          name="name"
          label="Name"
          value={formValues.name}
          onChange={handleChange}
          required
          InputProps={{
            style: {
              color: '#6792DB',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#E6B397',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        <TextField
          name="phone"
          label="Phone"
          value={formValues.phone}
          onChange={handleChange}
          required
          InputProps={{
            style: {
              color: '#6792DB',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#E6B397',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        <TextField
          name="email"
          label="Email"
          value={formValues.email}
          onChange={handleChange}
          required
          InputProps={{
            style: {
              color: '#6792DB',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#E6B397',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        <TextField
          name="message"
          label="Message"
          value={formValues.message}
          onChange={handleChange}
          required
          InputProps={{
            style: {
              color: '#6792DB',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '11px 1px 2px rgba(0, 0, 0, 0.8)'
            },
          }}
          InputLabelProps={{
            style: {
              color: '#E6B397',
              fontFamily: "Georgia",
              fontWeight: 'bolder',
              fontSize: '25px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
            },
          }}
        />
        <br />
        
        <Button type="submit" variant="contained"
          style={{
            backgroundColor: '#E6B397',
            color: 'white',
            textShadow: '10px 10px 15px rgba(0.5, 0.5, 0.5, 3)',
            boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Georgia',
          }}>
          Submit
        </Button>
      </form>
    </>
  )
}

export default ContactG;
