import React from 'react';
import { useLocation, useHistory } from 'react-router';

const About = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <div>About</div>
      <div>Location: {location.pathname}</div>
      <div>From = {location.state.from}</div>
      <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default About;
