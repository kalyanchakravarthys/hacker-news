import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import globalStyles from '../styles/global.js';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {globalStyles}
        </style>
      </Container>
    )
  }
}

export default MyApp