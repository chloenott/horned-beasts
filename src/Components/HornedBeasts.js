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
      <Card style={{
        width: '14rem',
        padding: '0rem',
        margin: '0.5rem'
        }}>
        
        <Card.Img
          variant="top" 
          src={this.props.beast.image_url}
          alt={this.props.beast.description} 
          title={this.props.beast.title}
          style={{
            objectFit: 'cover',
            height: '10rem'
          }} onClick={() => this.props.showDetails(this.props.beast)}/>

        <Card.Body>
          <Card.Title>{`${this.props.beast.title} `}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Badge onClick={this.incrementFavoritedCount}>
            <AiFillHeart style={{verticalAlign: 'bottom'}}/> 
            {` ${this.state.favoritedCount}`}
          </Badge>
        </Card.Footer>

      </Card>
    )
  }
}