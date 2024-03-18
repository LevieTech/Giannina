import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import FloatingIcon from '../FloatingIcon/FloatingIcon';
import BioPage from '../InfoPage/Bio';
import ContactG from '../Contact/ContactG';
import HomePage from '../HomePage/HomePage';
import Services from '../Services/Services';

function UserPage() {
  let history = useHistory();
  const toContact = () => { history.push('/contactg') }
  const user = useSelector((store) => store.user);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container userPage">
      <FloatingIcon />
      <header className="App-header">
        <h2 className="App-subtitle">Are you feeling stuck, yearning for more, yet unsure of the path forward? Life often presents us with challenges, uncertainties, and moments where we crave growth but aren't quite sure how to navigate it. It's during these times that having the right guidance and support can make all the difference! Hi im Giannina!
        </h2>
        <img className="avatar-image" src="/images/Giannina.png" alt="Giannina" />
      </header>
      <div id="biopage">
        <BioPage />
      </div>
      <div id="home">
        <HomePage />
      </div>
      <div id="contactg">
        <ContactG />
      </div>
      <div id="services">
        <Services />
      </div>

      {/* Logos Section */}
      <section className="logos-section">
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
       className="logos-container">
          <img src="/images/broad.jpg" alt="Broad Logo" className="logo"style={{ width: '100px', height: 'auto', margin: '0 10px' }} />
          <img src="/images/cvla.png" alt="CVLA Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
          <img src="/images/lifmvs.jpeg" alt="LIFMVS Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
          <img src="/images/sanfran.jpeg" alt="San Francisco Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
          <img src="/images/stripe.png" alt="Stripe Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
          <img src="/images/Tides.png" alt="Tides Logo" className="logo"style={{ width: '100px', height: 'auto', margin: '0 10px' }} />
          <img src="/images/wells.png" alt="Wells Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
          <img src="/images/wingrt.webp" alt="Wingrt Logo" className="logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }}/>
        </div>
      </section>
    </div>
  );
}

export default UserPage;
