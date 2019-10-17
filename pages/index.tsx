import { NextPage } from 'next';
import { App } from '../components/app.component';

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <>
    <App />
    <main>Your user agent: {userAgent}</main>
  </>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Page;
