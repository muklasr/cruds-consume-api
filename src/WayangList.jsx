import React from 'react';
import API from './API';
import { Button, Card, Col, Row } from 'react-bootstrap';
import ModalComponent from './ModalComponent';

class WayangList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wayangs: [],
            error : null
        }
    }

    componentDidMount() {
        this.getWayang()
        // const URL = "http://wayangapi.herokuapp.com/api/wayang";
        // fetch(URL)
        // .then(res => res.json())
        // .then(response => {
        //     this.setState({wayangs: response.result})
        // }),
        // (error) => {
        //     this.setState({ error });
        // }
    }

    getWayang(){
        API.get('/wayang')
        .then(res => {
            this.setState({wayangs: res.data.result})
        }).catch(error => {
            this.setState({ error })
        })
    }

    deleteWayang= (id) => {
        API.delete('/wayang/'+id)
        .then(res => {
            this.render()
        }).catch(error => {
            this.setState({ error })
        })
        this.getWayang()
        this.render()
    }

    render(){
        const { wayangs, error } = this.state;
        if(error){
            return ( <div>Error : {error.message}</div>);
        } else {
            return (
                <Row>
                {wayangs.map(wayang => (
                    <Col md={3} key={wayang.id}>
                        <Card>
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
                                <ModalComponent id={wayang.id} text="Edit"/>
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

export default WayangList;