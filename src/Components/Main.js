import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import Row from 'react-bootstrap/Row'

export default class Main extends React.Component {
    render() {
      return (
        <Row>
            {this.props.beasts.map( beast => <HornedBeasts key={beast.title} beast={beast} showDetails={this.props.showDetails} />)}
        </Row>
      )
    }
  }