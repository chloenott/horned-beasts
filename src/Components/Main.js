import React from 'react'
import HornedBeasts from './HornedBeasts.js'
import data from '../assets/data.json'

export default class Main extends React.Component {
    render() {
      return (
        <>
          {data.map( element => <HornedBeasts {...element} /> )}
        </>
      )
    }
  }