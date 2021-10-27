import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import data from '../assets/data.json'

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Main data={data}/>
        <Footer />
      </Container>
    )
  }
}