import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";


function ContactG() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });


  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        setErrorMessage(""); // Clear any previous error message
        // Clear form data after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        console.error("Error submitting form");
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Display the error message to the user
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setErrorMessage("An unexpected error occurred. Please try again later."); // Display a generic error message
    }
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
              value={formData.name}
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
              value={formData.phone}
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
              value={formData.email}
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
              value={formData.message}
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
