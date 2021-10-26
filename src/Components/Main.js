import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import data from '../assets/data.json'
import { Container, Row, Col } from 'react-bootstrap'

export default class Main extends React.Component {
    render() {
      return (
        <Container>
          <Row xs={1} md={2} lg={3}>
              {data.map( element => (
                <Col>
                <HornedBeasts {...element}/>
                </Col>
              ))
              }
          </Row>
        </Container>
      )
    }
  }