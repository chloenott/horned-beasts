import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import data from '../assets/data.json'
import { Row } from 'react-bootstrap'

export default class Main extends React.Component {
    render() {
      return (
          <Row>
              {data.map( element => <HornedBeasts {...element}/> )}
          </Row>
      )
    }
  }