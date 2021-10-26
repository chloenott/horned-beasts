import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { AiFillHeart } from 'react-icons/ai';

export default class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritedCount: 0};
  }

  incrementFavoritedCount = () => {
    this.setState( {favoritedCount: this.state.favoritedCount + 1} );
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" 
            src={this.props.image_url}
            alt={this.props.description} 
            title={this.props.title}/>
        <Card.Body>
          <Card.Title>
            {`${this.props.title} `}
          </Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Badge onClick={this.incrementFavoritedCount}>
          <AiFillHeart /> 
          {` ${this.state.favoritedCount}`}
        </Badge>
      </Card>
    )
  }
}