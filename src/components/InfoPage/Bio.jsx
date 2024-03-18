import React from 'react';
import { Container, Typography } from '@mui/material';
import './Bio.css';
import FloatingIcon from '../FloatingIcon/FloatingIcon';
function BioPage() {
  return (
    <Container maxWidth="md" className="container">
<FloatingIcon />

      <section className="section">
        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Dancing Script, cursive' }}>
          About Me
        </Typography>
        <hr />
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
          Giannina enables others to better serve themselves, expand their possibilities, and act more effectively to better design their future. She is passionate about coaching to the human soul.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
          Giannina is a Certified Effectiveness and Life Coach with over 20 years of experience working at Wells Fargo in various roles including Management, Human Resources, Talent Development, Performance Management, and Leadership Development.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }} >
          She has worked with leaders at all levels, from entry-level managers to senior executives, providing coaching and consulting in areas such as Leadership Development, Engagement and Culture, Change Management, Team Effectiveness, Manager Development, and Diversity and Inclusion.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
          Giannina specializes in Ontological Coaching, which facilitates profound learning and transformation in one’s “way of being”. She helps individuals achieve their goals by addressing what’s missing in different domains of their lives and assisting them to identify and achieve what they desire.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
          Giannina holds a Masters Certificate of Organizational Leadership from St. Catherine’s University, MN, and a BS in Finance/Entrepreneurial Studies/Management from Carlson School of Management/U of MN. She is also a Certified Effectiveness Coach from Say Yess! Coaching Academy and has completed training in Dare to Lead by Brene Brown, as well as Team Effectiveness and Change Management Certification.
        </Typography>

      </section>
      <hr />
      <section className="section">
        <Typography variant="h4" gutterBottom style={{ fontFamily: 'italic' }}>
          SPECIALITIES
        </Typography>
        <ul>
          <li>Emerging Leaders / Leadership Development</li>
          <li>Health and Well-Being</li>
          <li>Personal Growth</li>
          <li>Work-Life Alignment</li>
        </ul>
        <hr />
      </section>

      
    </Container>
  );
}

export default BioPage;

