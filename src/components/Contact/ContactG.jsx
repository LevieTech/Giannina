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
      <h1 style={{
        color: '',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'Dancing Script, cursive',
        textAlign: 'center',
      }}>Ready to take the first step towards a life of purpose, fulfillment, and abundance? Let's embark on this transformative journey together!</h1>


<form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
         maxWidth: '1100px',
         padding: '5px',
       
         
      }}>
        <div>
          <div>
            <TextField
              name="name"
              label="Name"
              value={formValues.name}
              onChange={handleChange}
              required
              inputProps={{
                style: {
                  color: '#6792DB',
                  fontFamily: "lobster",
                  fontWeight: 'bold',
                  fontSize: '25px',
                  textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)' ,
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
          </div>
          <div>
            <TextField
              name="phone"
              label="Phone"
              value={formValues.phone}
              onChange={handleChange}
              required
              inputProps={{
                style: {
                  color: '#6792DB',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
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
          </div>
          <div>
            <TextField
              name="email"
              label="Email"
              value={formValues.email}
              onChange={handleChange}
              required
              inputProps={{
                style: {
                  color: '#6792DB',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
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
          </div>
          <div>
            <TextField
              name="message"
              label="Message"
              value={formValues.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              inputProps={{
                style: {
                  color: '#6792DB',
                  fontFamily: "Georgia",
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
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
          </div>

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

        </div >
      </form>
    </>
  )
}

export default ContactG;