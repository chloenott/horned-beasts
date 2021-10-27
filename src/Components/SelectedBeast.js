import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap'

export default class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.beast} onHide={this.props.handleHide}>
                <Modal.Header>
                    <h1>{this.props.beast ? this.props.beast.title : ''}</h1>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.beast ? this.props.beast.image_url : ''} className='img-fluid'></Image>
                    {this.props.beast ? this.props.beast.description : ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}