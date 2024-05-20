import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css'; // Import the CSS file

const ComingSoon = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideInFromLeft = useSpring({ x: 0, from: { x: -100 }, delay: 400 });
  const slideInFromRight = useSpring({ x: 0, from: { x: 100 }, delay: 600 });

  const navigate = useNavigate();

  return (
    <div className="page">
      <animated.div className="card" style={fadeIn}>
        <animated.h1 className="title" style={slideInFromLeft}>
          Project Coming Soon
        </animated.h1>
        <animated.h2 className="subtitle" style={slideInFromRight}>
          Exciting Features are on the Way!
        </animated.h2>
        <animated.p className="description" style={fadeIn}>
          Our team is working diligently to bring you a state-of-the-art project that includes:
        </animated.p>
        <animated.ul className="features-list" style={fadeIn}>
          <li>Seamless Payment Gateway Integration</li>
          <li>User-friendly Interface</li>
          <li>Advanced Security Features</li>
          <li>Comprehensive Analytics Dashboard</li>
          <li>24/7 Customer Support</li>
        </animated.ul>
        <animated.p className="description" style={fadeIn}>
          We appreciate your patience and can't wait to share these amazing features with you. Stay tuned for updates and follow us on our social media channels for the latest news.
        </animated.p>
        <button className="home-button" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </animated.div>
    </div>
  );
};

export default ComingSoon;
