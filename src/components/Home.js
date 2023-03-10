import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Home Page</h1>
          <h2>Welcome to Icebox Ski Shop!</h2>
          <p>
            What's up shredder? Let's be real, if you're here shopping with us then you are the real deal! If want to ski the toughest lines with the best and safest gear then you don't have to look any further.
            <br />
            <br />
            Check out our "About" section to learn more about Icebox
            <br />
            <br />
            Check out our Storefront to see all the latest and greatest gear. If you are feeling a little lost, you can always get back to the Storefront!
            <br />
            <br />
            Don't be shy, shop around! We have everything to meet your needs here at the newest ski shop around!
          </p>
        </Col>
        <Col>
          <Image src="https://www.fall-line.co.uk/wp-content/uploads/2015/10/bob-woodall-corbets-couloir-fall-line-skiing.jpeg" alt="Corbet's Couloir" fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default Home

