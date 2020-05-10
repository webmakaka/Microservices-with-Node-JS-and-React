import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log('currentUser ', currentUser);
  // axios.get('/api/users/currentuser');
  return <h1>Langing Page </h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://172-17-0-2.kubernetes.default.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    const { data } = await axios.get('/api/users/currentuser');
    console.log('data');
    console.log(data);
    return data;
  }

  return {};
};

export default LandingPage;
