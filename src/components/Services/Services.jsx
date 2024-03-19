import React from 'react';
import { Container, Typography, List, ListItem, Divider, Box } from '@mui/material';
import FloatingIcon from '../FloatingIcon/FloatingIcon';

function Services() {
  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DBB4B5', minHeight: '100vh', minWidth:'100vh' }}>
      <Box textAlign="center">
        <FloatingIcon />
        <section className="section" style={{ maxWidth: '400px' }}>
          <Typography variant="h5" sx={{ width: '90%',  textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'italic',
        textAlign: 'center',fontSize: '30px',}}>
            Specialties and Coaching Services I Offer:
          </Typography>
          <List style={{ margin: 'auto', padding: '10px',textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'italic',
        textAlign: 'center', }}>
            <ListItem>
              <Typography variant="body1">*Emerging Leaders / Leadership Development</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">*Health and Well-Being</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">*Personal Growth</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">*Work-Life Alignment</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">*Consulting</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">*Confidence Coaching</Typography>
            </ListItem>
          </List>
          <Divider />
        </section>
      </Box>
    </Container>
  );
}

export default Services;

