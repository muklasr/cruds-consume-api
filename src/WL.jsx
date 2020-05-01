import React from 'react';
import { Button, Table } from 'react-bootstrap';

class WL extends React.Component{

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
            <Table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Golongan</th>
                <th>Kasta</th>
                <th>Senjata</th>
                <th>Ayah</th>
                <th>Ibu</th>
                <th>Pasangan</th>
                <th>Anak</th>
                <th>Image URL</th>
              </tr>
            </thead>
            <tbody>
              {wayangs.map(wayang => (
                <tr key={wayang.id}>
                  <td>{wayang.nama}</td>
                  <td>{wayang.golongan}</td>
                  <td>{wayang.kasta}</td>
                  <td>{wayang.senjata}</td>
                  <td>{wayang.ayah}</td>
                  <td>{wayang.ibu}</td>
                  <td>{wayang.pasangan}</td>
                  <td>{wayang.anak}</td>
                  <td>{wayang.image_url}</td>
                  <td>
                    <Button onClick={() => this.props.editWayang(wayang.id)}>Edit</Button>
                    &nbsp;<Button onClick={() => this.deleteWayang(wayang.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            )
        }
    }
}

export default WL;