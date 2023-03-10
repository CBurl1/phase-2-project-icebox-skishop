import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import { Row, Col } from 'react-bootstrap';

function Storefront() {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Snowboard />
        </Col>
        <Col xs={12} md={4}>
          <Ski />
        </Col>
        <Col xs={12} md={4}>
          <Apparel />
        </Col>
      </Row>
    </div>
  )
}

export default Storefront;

