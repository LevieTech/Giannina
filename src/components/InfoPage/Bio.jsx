import React from 'react';
import { Container, Typography } from '@mui/material';
import './Bio.css'; 

function BioPage() {
  return (
    <Container maxWidth="md" className="container">
      <section className="section">
        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Dancing Script, cursive' }}>
          SPECIALIZES IN
        </Typography>
        <ul>
          <li>Emerging Leaders / Leadership Development</li>
          <li>Health and Well-Being</li>
          <li>Personal Growth</li>
          <li>Work-Life Alignment</li>
        </ul>
        <hr />
      </section>

      <section className="section">
        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Dancing Script, cursive' }}>
          About Giannina
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'lobster' }}>
          Giannina enables others to better serve themselves, expand their possibilities, and act more effectively to better design their future. She is passionate about coaching to the human soul.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'lobster' }}>
          Giannina is a Certified Effectiveness and Life Coach with over 20 years of experience working at Wells Fargo in various roles including Management, Human Resources, Talent Development, Performance Management, and Leadership Development.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'lobster' }} >
          She has worked with leaders at all levels, from entry-level managers to senior executives, providing coaching and consulting in areas such as Leadership Development, Engagement and Culture, Change Management, Team Effectiveness, Manager Development, and Diversity and Inclusion.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'lobster' }}>
          Giannina specializes in Ontological Coaching, which facilitates profound learning and transformation in one’s “way of being”. She helps individuals achieve their goals by addressing what’s missing in different domains of their lives and assisting them to identify and achieve what they desire.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'lobster' }}>
          Giannina holds a Masters Certificate of Organizational Leadership from St. Catherine’s University, MN, and a BS in Finance/Entrepreneurial Studies/Management from Carlson School of Management/U of MN. She is also a Certified Effectiveness Coach from Say Yess! Coaching Academy and has completed training in Dare to Lead by Brene Brown, as well as Team Effectiveness and Change Management Certification.
        </Typography>
        
      </section>

      {/* Logos Section */}
      <section className="logos-section">
        <Typography variant="h4" gutterBottom>
          who i worked w 
        </Typography>
        <div className="logos-container">
          <img src="/images/broad.jpg" alt="Broad Logo" className="logo" />
          <img src="/images/cvla.png" alt="CVLA Logo" className="logo" />
          <img src="/images/lifmvs.jpeg" alt="LIFMVS Logo" className="logo" />
          <img src="/images/sanfran.jpeg" alt="San Francisco Logo" className="logo" />
          <img src="/images/striope.png" alt="Striope Logo" className="logo" />
          <img src="/images/Tides.png" alt="Tides Logo" className="logo" />
          <img src="/images/wells.png" alt="Wells Logo" className="logo" />
          <img src="/images/wingrt.webp" alt="Wingrt Logo" className="logo" />
        </div>
      </section>
    </Container>
  );
}

export default BioPage;

