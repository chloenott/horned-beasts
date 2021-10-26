import React from 'react'

export default class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title} width="300" />
        <p>{this.props.description}</p>
      </>
    )
  }
}