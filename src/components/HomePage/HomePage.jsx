import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './HomePage.css';

function HomePage() {
  return (
    <Container maxWidth="md">
      <header className="App-header">
      <h2 className="App-subtitle">Are you feeling stuck, yearning for more, yet unsure of the path forward? Life often presents us with challenges, uncertainties, and moments where we crave growth but aren't quite sure how to navigate it. It's during these times that having the right guidance and support can make all the difference! Hi im Giannina Cochina!
        </h2>
        <img className="avatar-image" src="/images/Giannina.png" alt="Giannina" />
      </header>

      {/* New section */}
      <section className="video-section">
        <Typography variant="h3" gutterBottom>
          VIDEO
        </Typography>
        <Typography variant="body1" gutterBottom>
          Coaching page info: <Link href="https://www.a-plancoaching.com/coach/giannina-hall/">https://www.a-plancoaching.com/coach/giannina-hall/</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Full coaches page: <Link href="https://www.a-plancoaching.com/coaches/">https://www.a-plancoaching.com/coaches/</Link>
        </Typography>
        <Typography variant="body1">
          You can also see a short video of me at the bottom of this page: <Link href="https://www.a-plancoaching.com/personal-coaching/">https://www.a-plancoaching.com/personal-coaching/</Link>
        </Typography>
      </section>
    </Container>
  );
}

export default HomePage;



