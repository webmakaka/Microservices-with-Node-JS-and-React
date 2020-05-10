import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log('currentUser ', currentUser);
  // axios.get('/api/users/currentuser');
  return <h1>Langing Page </h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
