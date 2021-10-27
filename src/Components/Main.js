import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import { Row } from 'react-bootstrap'

export default class Main extends React.Component {
    render() {
      return (
          <Row>
              {this.props.beasts.map( beast => <HornedBeasts beast={beast} showDetails={this.props.showDetails} />)}
          </Row>
      )
    }
  }