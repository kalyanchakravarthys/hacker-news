import React from 'react';
import App, { Container } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import Layout from '../components/Layout';
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
        <NextNprogress
          color="#29D"
          startPosition="0.3"
          stopDelayMs="200"
          height="3"
        />
        <style jsx global>
          {globalStyles}
        </style>
      </Container>
    )
  }
}

export default MyApp