import React from 'react';
import './landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Hunt Kudu Track Club</h1>
        <p>Chasing Excellence at New Balance Nationals Indoor</p>
      </header>
      <main>
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            Welcome to Hunt Kudu Track Club, where our motto is to hunt the Kudu.
            We are excited to showcase our talent and dedication at the New Balance Nationals Indoor.
          </p>
        </section>

        <section className="event-details">
          <h2>Event Details</h2>
          <p>
            Date: [Insert Date]
            <br />
            Location: [Insert Location]
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            For more information, please contact us at:
            <br />
            Email: [Your Email]
            <br />
            Phone: [Your Phone Number]
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Hunt Kudu Track Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
