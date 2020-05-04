import Head from 'next/head';
import Header from './header';
import { Container, Row, Col } from "react-bootstrap"

export default ({ children }) => {
    return (<div className="body-wrapper">
        <Head>
            <title>Tesco Assignment</title>
            <link rel="manifest" href="/static/manifest.json" />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="hack-news" />
            <meta name="apple-mobile-web-app-title" content="hack-news" />
            <meta name="theme-color" content="#f60" />
            <meta name="msapplication-navbutton-color" content="#f60" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="msapplication-starturl" content="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
            <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
            <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
        </Head>

        <Container>
            <Row className="justify-content-md-left">
                <Col xs lg="2">

                </Col>
                <Col md="auto"><Header /></Col>
                <Col xs lg="2">

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2">

                </Col>
                <Col md="auto">{children}</Col>
                <Col xs lg="2">

                </Col>
            </Row>
        </Container>
    </div>)
}