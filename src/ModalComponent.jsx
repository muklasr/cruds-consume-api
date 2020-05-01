import React, { useState } from "react";
import API from "./API";
import { Button, Form, Modal } from "react-bootstrap";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      error: null,
      data: {
        id: 0,
        nama: "",
        golongan: "",
        kasta: "",
        senjata: "",
        ayah: "",
        ibu: "",
        pasangan: "",
        anak: "",
        image_url: "",
      },
      modalShow: false,
      isUpdate: false,
    };
  }

  componentDidMount() {
    if (this.props.id) {
      this.setState({ isUpdate: true });
      this.displayData();
    }
  }

  handleFormChange = (event) => {
    let newData = { ...this.state.data };
    newData[event.target.name] = event.target.value;
    this.setState({ data: newData });
  };

  getWayang = () => {
    API.get(`/wayang/${this.props.id}`)
      .then((res) => {
        this.setState({ data: res.data.result });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  displayData = () => {
    this.getWayang();
    console.log(this.state.data);
  };

  saveWayang = () => {
    let data = this.state.data;
    const options = {
      headers: { "Content-Type": "application/json" },
    };

    if (this.state.isUpdate) {
      API.put(`/wayang/${this.props.id}`, data, options)
        .then((res) => {
          this.setState({
            response: res.data.result,
          });
        })
        .catch((error) => {
          this.setState({ error });
        });
    } else {
      API.post("/wayang", data, options)
        .then((res) => {
          this.setState({
            response: res.data.result,
          });
        })
        .catch((error) => {
          this.setState({ error });
        });
    }

    this.setState({ modalShow: false });
    // let apiUrl = 'http://wayangapi.herokuapp.com/api/wayang';

    // fetch(apiUrl, {
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       response: result.result
    //     })
    //   },
    //   (error) => {
    //     this.setState({ error });
    //   }
    // )
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ modalShow: true })}>
          {this.props.text}
        </Button>
        <Modal
          size="lg"
          show={this.state.modalShow}
          onHide={() => false}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.state.isUpdate ? "Ubah " : "Tambah "}
              Wayang
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={this.state.data.nama}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Golongan</Form.Label>
                <Form.Control
                  type="text"
                  name="golongan"
                  placeholder="Golongan"
                  value={this.state.data.golongan}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kasta</Form.Label>
                <Form.Control
                  type="text"
                  name="kasta"
                  placeholder="Kasta"
                  value={this.state.data.kasta}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Senjata</Form.Label>
                <Form.Control
                  type="text"
                  name="senjata"
                  placeholder="Senjata"
                  value={this.state.data.senjata}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ayah</Form.Label>
                <Form.Control
                  type="text"
                  name="ayah"
                  placeholder="Ayah"
                  value={this.state.data.ayah}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ibu</Form.Label>
                <Form.Control
                  type="text"
                  name="ibu"
                  placeholder="Ibu"
                  value={this.state.data.ibu}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Pasangan</Form.Label>
                <Form.Control
                  type="text"
                  name="pasangan"
                  placeholder="Pasangan"
                  value={this.state.data.pasangan}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Anak</Form.Label>
                <Form.Control
                  type="text"
                  name="anak"
                  placeholder="Anak"
                  value={this.state.data.anak}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image_url"
                  placeholder="Image URL"
                  value={this.state.data.image_url}
                  onChange={this.handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={this.saveWayang}>
                Simpan
              </Button>
              &nbsp;
              <Button
                variant="secondary"
                onClick={() => this.setState({ modalShow: false })}
              >
                Batal
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
