import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <h2> Hello Valued Customer ᨒ </h2>
          <p>
            Ever since Icebox Ski Shop was founded in March of 2023, we have been providing the best gear for the steeziest shredders.
            Whether you need something skinny to rip groomers or a wide setup for those big powder days we have everything to meet your needs.
            Alongside our extensive ski and snowboard offerings, we also offer premier apparel including socks, baselayers, midlayers, shells
            and even insulated jackets. At Icebox Ski Shop, we have everything to get you out on your favorite mountain and making great memories with your friends and families.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>We Are Here to Answer Any of Your Questions!</h2>
          <br />
          <h2> Contact us:</h2>
          <br />
          <p>
            Phone - (555)-(555)-(5555)
            <br />
            Email - support@iceboxskishop.com
            <br />
            Address: 225 Mountain Drive, Telluride, Colorado, 81435
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
