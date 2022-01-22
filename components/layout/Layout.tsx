import React, { ReactElement } from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return <>
    <Navigation />
    {children}
    <Footer />
  </>;
};


export default Layout;
