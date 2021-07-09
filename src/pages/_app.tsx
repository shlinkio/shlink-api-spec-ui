import { FC } from 'react';
import '../assets/css/main.css';

interface MyAppProps {
  Component: FC;
  pageProps: object;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
