import { NextPage } from 'next';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => <Title>Your user agent: {userAgent}</Title>;

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Page;
