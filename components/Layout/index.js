import Header from './header'
import { Container, Row, Col } from 'react-bootstrap'
import NextNprogress from 'nextjs-progressbar'

export default ({ children }) => {
  return (
    <div className="body-wrapper">
      <Container>
        <Row className="justify-content-md-left">
          <Col xs lg="2"></Col>
          <Col xs lg="8">
            <Header />
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="8">{children}</Col>
          <Col xs lg="2"></Col>
        </Row>
        <NextNprogress
          color="#29D"
          startPosition="0.3"
          stopDelayMs="200"
          height="3"
        />
      </Container>
    </div>
  )
}
