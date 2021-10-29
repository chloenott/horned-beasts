import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import Row from 'react-bootstrap/Row'
import { Form, FloatingLabel } from 'react-bootstrap'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {beasts: this.props.beasts}
  }

  filterBeastsByHorn = (event) => {
    let selectedFilter = event.target.value;
    let filterFunc = (beast) => {
      return isNaN(selectedFilter) ? true : beast.horns === Number(selectedFilter)
    }
    let filteredBeasts = this.props.beasts.filter( filterFunc )

    this.setState( {beasts: filteredBeasts} );
  }

  render() {
    let beastsHornValues = this.props.beasts.map( beasts => beasts.horns );
    let uniqueHornValues = [...new Set(beastsHornValues)];
    let filterOptions = ['All', ...uniqueHornValues]
    
    let formOptionBuilder = (filterOption) => {
      return (
        <option key={filterOption} value={filterOption}>
          {filterOption}
        </option>
      )
    }
    
    return (
      <>
        <FloatingLabel label="Filter by number of horns">
          <Form.Control as="select" aria-label="Label" onChange={this.filterBeastsByHorn}>
            {filterOptions.map(formOptionBuilder)}
          </Form.Control>
        </FloatingLabel>

        <Row>
            {this.state.beasts.map( beast => {
              return <HornedBeasts key={beast.title} beast={beast} showDetails={this.props.showDetails} />
            })}
        </Row>
      </>
    )
  }
}