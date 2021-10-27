import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeast.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import beasts from '../assets/data.json'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showBeast: null};
  }

  showDetails = (beast) => {
    this.setState({showBeast: beast});
  }

  handleHide = () => {
    this.setState({showBeast: null})
  }

  render() {
    return (
      <Container>
        <Header />
        <Main beasts={beasts} showDetails={this.showDetails}/>
        <Footer />
        <SelectedBeast beast={this.state.showBeast} handleHide={this.handleHide} />
      </Container>
    )
  }
}