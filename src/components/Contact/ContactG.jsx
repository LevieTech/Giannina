import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Typography, Card } from "@mui/material";
import { blue } from "@mui/material/colors";

function ContactG() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 220)
  }, [])

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
      <center>
        <Typography variant="h6" sx={{ width: '90%', }} >
          Ready to take the first step towards
          a life of purpose, fulfillment,
          and abundance? <br /> <br /> Let's embark on
          this transformative journey together!
        </Typography>

        <Card sx={{
          width: '450px',
          height: 'fit-content',
          boxShadow: 5,
          marginTop: 8,
        }}>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '1100px',
            padding: '30px',


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
                      color: '#32506e',
                      fontFamily: "lobster",
                      fontWeight: 'bold',
                      fontSize: '25px',
                      width: 300,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#32506e',
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
                      width: 300,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#32506e',
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
                      width: 300,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#32506e',
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
                  sx ={{ width: '328px'}}
                  inputProps={{
                    style: {
                      color: '#6792DB',
                      fontFamily: "Georgia",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      width: 300,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#32506e',
                      fontFamily: "Georgia",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)'
                    },
                  }}
                />
              </div>

              <button className="btn" type="submit">
                Submit
              </button>

              <br></br>
          </div >
        </form>
        </Card>

        <div style={{ marginTop:20, width:200, backgroundColor:'#d5e8fb', padding:15, }}>
              <a href="https://calendly.com/gninag/fit-call" target="_blank" rel="noopener noreferrer">
                <Avatar alt="Giannina's Photo" src="/images/Giannina.png" style={{ width: '100px', height: '100px' }} />
              </a>
              <h4 style={{
                color: 'black',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontFamily: 'inherit',
                textAlign: 'center',
              }}> Or click on my face to
               schedule a chat in my calendly!</h4>
            </div>
      </center>
    </>

  )
}

export default ContactG;
