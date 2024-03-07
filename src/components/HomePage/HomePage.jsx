import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './HomePage.css';

function HomePage() {
  return (
    <Container maxWidth="md">
    
      <br />
      {/* New section */}
      <section className="video-section">
        <center>
          <Typography variant="h3" gutterBottom>
            My Links
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coaching page info: <Link href="https://www.a-plancoaching.com/coach/giannina-hall/">https://www.a-plancoaching.com/coach/giannina-hall/</Link>
          </Typography>
          <Typography variant="body1">
            You can also watch a short video about myself!
          </Typography>
          <br/>
          <iframe src="https://iplayerhd.com/player/video/ccf6398a-9518-4d61-871f-4f1ae03773f5" width="800" height="450"></iframe>
        </center>
      </section>
    </Container>
  );
}

export default HomePage;



