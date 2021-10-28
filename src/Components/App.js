import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeast.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, FloatingLabel } from 'react-bootstrap'
import beasts from '../assets/data.json'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBeast: null,
      beasts: beasts
    };
  }

  showDetails = (beast) => {
    this.setState({showBeast: beast});
  }

  handleHide = () => {
    this.setState({showBeast: null});
  }

  filterBeastsByHorn = (event) => {
    let filterTo = event.target.value;
    this.setState({
      beasts: beasts.filter( beast => 
        isNaN(filterTo) ? true : beast.horns === Number(filterTo) 
      )
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <FloatingLabel label="Filter by number of horns">
            <Form.Control as="select" aria-label="Label" onChange={this.filterBeastsByHorn}>
              {['All', '1', '2', '3'].map( filterTo =>
                  <option key={filterTo} value={filterTo}>{filterTo}</option>
              )}
            </Form.Control>
          </FloatingLabel>
        <Main beasts={this.state.beasts} showDetails={this.showDetails}/>
        <Footer />
        <SelectedBeast beast={this.state.showBeast} handleHide={this.handleHide} />
      </Container>
    )
  }
}