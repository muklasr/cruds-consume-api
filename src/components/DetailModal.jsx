import React from "react";
import API from "./../API";
import { Container, Modal, Col, Row } from "react-bootstrap";
import Img from "./ImageComponent";

class DetailModal extends React.Component {
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
    };
  }

  componentDidMount() {
    if (this.props.id) {
    //   this.setState({ isUpdate: true });
    //   this.setState({ modalShow: this.props.show });
      this.getWayang();
    }
  }

  getWayang = () => {
    API.get(`/wayang/${this.props.id}`)
      .then((res) => {
        this.setState({ data: res.data.result });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <Modal
          size="md"
          show={this.props.show}
          onHide={() => false}
          aria-labelledby="example-modal-sizes-title-md"
        >
        <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-md">
              Detail Wayang
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col lg={4}>
                  <Img src={this.state.image_url} />
                </Col>
                <Col lg={8}>
                  <table>
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td>: {this.state.nama}</td>
                    </tr>
                    <tr>
                      <td>Golongan</td>
                      <td>: {this.state.golongan}</td>
                    </tr>
                    <tr>
                      <td>Kasta</td>
                      <td>: {this.state.kasta}</td>
                    </tr>
                    <tr>
                      <td>Senjata</td>
                      <td>: {this.state.senjata}</td>
                    </tr>
                    <tr>
                      <td>Ayah</td>
                      <td>: {this.state.ayah}</td>
                    </tr>
                    <tr>
                      <td>Ibu</td>
                      <td>: {this.state.ibu}</td>
                    </tr>
                    <tr>
                      <td>Pasangan</td>
                      <td>: {this.state.pasangan}</td>
                    </tr>
                    <tr>
                      <td>Anak</td>
                      <td>: {this.state.anak}</td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DetailModal;
