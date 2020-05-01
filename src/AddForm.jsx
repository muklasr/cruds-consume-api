import React from 'react';
import { Button, Card, CardDeck, Col, Row } from 'react-bootstrap';

class AddForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wayangs: [],
            error : null
        }
    }

    componentDidMount() {
        const URL = "http://wayangapi.herokuapp.com/api/wayang";
        fetch(URL)
        .then(res => res.json())
        .then(response => {
            this.setState({wayangs: response.result})
        }),
        (error) => {
            this.setState({ error });
        }
    }

    render(){
        const { wayangs, error } = this.state;
        console.log(wayangs);
        if(error){
            return ( <div>Error : {error.message}</div>);
        } else {
            return (
                <Row>
                {wayangs.map(wayang => (
                    <Col md={3}>
                        <Card key={wayang.id}>
                            <Card.Img variant="top" src={wayang.image_url} />
                            <Card.Body>
                            <Card.Title>{wayang.nama}</Card.Title>
                            <Card.Text>
                                {/* <p>{wayang.golongan}</p>
                                <p>{wayang.kasta}</p>
                                <p>{wayang.senjata}</p>
                                <p>{wayang.ayah}</p>
                                <p>{wayang.ibu}</p>
                                <p>{wayang.pasangan}</p>
                                <p>{wayang.anak}</p> */}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={() => this.props.editWayang(wayang.id)}>Edit</Button>
                                &nbsp;<Button variant="danger" onClick={() => this.deleteWayang(wayang.id)}>Delete</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row>
            )
        }
    }
}

export default AddForm;