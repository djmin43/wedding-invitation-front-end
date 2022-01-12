import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout
