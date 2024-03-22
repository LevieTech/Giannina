import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './HomePage.css';
import FloatingIcon from '../FloatingIcon/FloatingIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HomePage() {
  const imageSize = {
    width: '240px', // Adjust width as needed
    height: 'auto', // Maintain aspect ratio
    margin: '0 20px', // Add margin between the images
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Shadow effect
    transition: 'transform 0.3s ease', // Add transition for hover effect
  };

  const handleHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'; // Move the image slightly up on hover
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = 'translateY(0)'; // Reset transform on hover out
  };

  const linkedInIconStyle = {
    fontSize: 40,
    color: '#0A66C2',
    marginRight: 10,
    transition: 'transform 0.3s ease', // Add transition for hover effect
  };

  const handleLinkedInHover = (e) => {
    e.target.style.transform = 'rotate(5deg)'; // Rotate the LinkedIn icon on hover
  };

  const handleLinkedInHoverOut = (e) => {
    e.target.style.transform = 'rotate(0)'; // Reset rotation on hover out
  };

  return (
    <Container maxWidth="md" style={{ margin: 'auto', padding: '10px', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)', fontFamily: 'italic', textAlign: 'center', backgroundColor: '#B4D9BC' }}>
      <FloatingIcon />
      <br />
      {/* New section */}
      <section className="video-section">
        <center>
          <Typography variant="h3" gutterBottom style={{ margin: 'auto', padding: '10px', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)', fontFamily: 'italic', textAlign: 'center' }}>
            My Links
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coaching pages and Links 
          </Typography>
          <Typography variant="body1">
            You can watch a short video about myself!
          </Typography>
          <br />
          {/* LinkedIn Link */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <LinkedInIcon
              style={linkedInIconStyle}
              onMouseEnter={handleLinkedInHover} // Apply hover effect on mouse enter
              onMouseLeave={handleLinkedInHoverOut} // Reset on mouse leave
            />
            <Link href="https://www.linkedin.com/in/giannina-hall-257474133/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0A66C2' }}>
              LinkedIn Profile
            </Link>
          </div>
          {/* Coach Ranks Link */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.coachranks.com/blog/confidence-coaching">
              <img
                src="/images/Coaches2024.png"
                alt="Coaches 2024"
                className="button-image"
                style={imageSize}
                onMouseEnter={handleHover} // Apply hover effect on mouse enter
                onMouseLeave={handleHoverOut} // Reset on mouse leave
              />
            </Link>
            <Link href="https://www.coachranks.com/blog/confidence-coaching">
              <img
                src="/images/Guide.png"
                alt="Guide"
                className="button-image"
                style={imageSize}
                onMouseEnter={handleHover} // Apply hover effect on mouse enter
                onMouseLeave={handleHoverOut} // Reset on mouse leave
              />
            </Link>

            {/* <Link href="https://www.a-plancoaching.com/coach/giannina-hall/">
              <img
                src="/images/Aplan.png"
                alt="Aplan"
                className="button-image"
                style={imageSize}
                onMouseEnter={handleHover} // Apply hover effect on mouse enter
                onMouseLeave={handleHoverOut} // Reset on mouse leave
              />
            </Link> */}
            <Link href="https://www.coachranks.com/confidence-coach/giannina-hall">
              <img
                src="/images/GHall.png"
                alt="Aplan"
                className="button-image"
                style={imageSize}
                onMouseEnter={handleHover} // Apply hover effect on mouse enter
                onMouseLeave={handleHoverOut} // Reset on mouse leave
              />
            </Link>
          </div>

          <iframe src="https://iplayerhd.com/player/video/ccf6398a-9518-4d61-871f-4f1ae03773f5" width="600" height="450"></iframe>
        </center>
      </section>
    </Container>
  );
}

export default HomePage;


