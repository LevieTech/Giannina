import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Typography, Card } from "@mui/material";
import FloatingIcon from '../FloatingIcon/FloatingIcon';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

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
  const handleHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'; // Move the image slightly up on hover
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = 'translateY(0)'; // Reset transform on hover out
  };

  return (
    <div style={{ backgroundColor: '#d5e8fb' }} >
      <center>
        <FloatingIcon /> <WbSunnyIcon style={{ color: '#DBAD00', filter: "drop-shadow(3px 2px 4px rgba(0, 0, 0, 2.5))", marginLeft: '20px', marginTop: 40, fontSize: '80px' }} />

        <Typography variant="h6" sx={{
          width: '90%', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: 'italic',
          textAlign: 'center', fontSize: '30px', marginTop: 5,
        }} >
          Ready to take the first step towards
          a life of purpose, fulfillment,
          and abundance? <br />  Let's embark on
          this transformative journey together!
        </Typography>

        <Card sx={{
          width: '550px',
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
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      marginBottom: '20px',
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)',
                      width: '82px'
                    },
                  }}
                  inputProps={{
                    style: {
                      color: '#32506e',
                      fontFamily: "lobster",
                      fontWeight: 'bold',
                      fontSize: '25px',
                      width: 400,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

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
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontSize: '25px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)',
                      width: '82px'

                    },
                  }}
                  inputProps={{
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      width: 400,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)',
                      width: '82px'
                    },
                  }}
                  inputProps={{
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      width: 400,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
                  rows={5}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 2.9)',
                      width: '106px',
                      height: '100px'
                    },
                  }}
                  inputProps={{
                    style: {
                      color: '#32506e',
                      fontFamily: "cursive",
                      fontWeight: 'bolder',
                      fontSize: '25px',
                      width: 400,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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

        <div style={{ marginTop: 20, width: 200, padding: 15, }}>
          <a href="https://calendly.com/gninag/fit-call" target="_blank" rel="noopener noreferrer">
            <Avatar alt="Giannina's Photo" src="/images/Giannina.png" style={{ width: '200px', height: '200px' }} onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            />

          </a>
          <h4 style={{
            color: 'black',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontFamily: 'italic',
            textAlign: 'center',
            width: '400px'
          }}> Or click on my face to
            schedule a chat in my calendly!</h4>
        </div>
      </center>
    </div>
  )
}

export default ContactG;


