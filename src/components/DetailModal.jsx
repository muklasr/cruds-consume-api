import React from "react";
import API from "./../API";
import { Container, Modal, Col, Row, Button } from "react-bootstrap";
import Img from "./ImageComponent";

class DetailModal extends React.Component {
  constructor(props) {
    
    super(props);


    
    this.state = {
      idWayang: 0,
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
    console.log("cek "+this.props.idWayang)
  }

  componentWillReceiveProps(nextProps){
    console.log("cek "+nextProps.idWayang)
    if (nextProps.idWayang > 0) {
      this.setState({ idWayang: nextProps.idWayang });
      this.getWayang();
      this.setState({ modalShow: nextProps.show });
      console.log(this.state.data)
      console.log(nextProps.idWayang)
    }
  }

  getWayang = () => {
    API.get(`/wayang/${this.state.idWayang}`)
      .then((res) => {
        this.setState({ data: res.data.result });
        this.forceUpdate()
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
          show={this.state.modalShow}
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
                  <Img src={this.state.data.image_url} style={{ width: "100%" }} />
                </Col>
                <Col lg={8}>
                  <table>
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td>: {this.state.data.nama}</td>
                    </tr>
                    <tr>
                      <td>Golongan</td>
                      <td>: {this.state.data.golongan}</td>
                    </tr>
                    <tr>
                      <td>Kasta</td>
                      <td>: {this.state.data.kasta}</td>
                    </tr>
                    <tr>
                      <td>Senjata</td>
                      <td>: {this.state.data.senjata}</td>
                    </tr>
                    <tr>
                      <td>Ayah</td>
                      <td>: {this.state.data.ayah}</td>
                    </tr>
                    <tr>
                      <td>Ibu</td>
                      <td>: {this.state.data.ibu}</td>
                    </tr>
                    <tr>
                      <td>Pasangan</td>
                      <td>: {this.state.data.pasangan}</td>
                    </tr>
                    <tr>
                      <td>Anak</td>
                      <td>: {this.state.data.anak}</td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
            <Button
                variant="secondary"
                style={{shadowBox:"1px 1px blue-solid"}}
                onClick={() => this.setState({modalShow: false})}
              >
                Oke
              </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DetailModal;
