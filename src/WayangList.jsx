import React from "react";
import API from "./API";
import { Button, Card, Col, Row } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import DetailModal from "./components/DetailModal";
import SearchBar from "./components/SearchBar";
import Swal from "sweetalert2";
import Img from "./components/ImageComponent";

class WayangList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wayangs: [],
      error: null,
      show: false,
      deleting: false,
      showDetail: false,
      idDetail: 0,
    };
  }

  componentDidMount() {
    this.getWayang();
  }

  handleFS = (value) => {
    this.setState({ show: true });
    this.getWayang();
    Swal.fire("Yeay", "Berhasil disimpan!", "success");
  };    

  handleSearch(query){
    if(query){
    API.get(`/wayang/search/${query}`)
      .then((res) => {
        this.setState({ wayangs: res.data.result });
      })
      .catch((error) => {
        this.setState({ error });
      });
      this.render();
    } else {
      this.getWayang()
    }
    
  }

showDetail =(id)=>{
  if(id != "0"){
  this.setState({idDetail: id})
  this.setState({showDetail: true})
  }
  console.log("tes "+id)
}

  getWayang() {
    API.get("/wayang")
      .then((res) => {
        this.setState({ wayangs: res.data.result });
      })
      .catch((error) => {
        this.setState({ error });
      });
    this.render();
  }

  deleteWayang = (id) => {
    this.setState({ delete: true });
    API.delete("/wayang/" + id)
      .then((res) => {
        this.getWayang();
        Swal.fire("Yeay", "Berhasil dihapus!", "success");
      })
      .catch((error) => {
        this.setState({ error });
        Swal.fire("Oops..", "Gagal dihapus!", "error");
      });
    this.setState({ delete: false });
  };

  render() {
    const { wayangs, error, deleting } = this.state;
    return (
      <div>
        <SearchBar onSubmit={val => this.handleSearch(val)} />
        <DetailModal idWayang={this.state.idDetail} show={this.state.showDetail}/>
        <ModalComponent
          text="Tambah Wayang"
          onSubmit={(value) => this.handleFS(value)}
        />
        <Row style={{ marginTop: 10 }}>
          {error ? (
            <div>
              Gagal memuat data <br></br> Error : {error.message}
            </div>
          ) : (
            wayangs.map((wayang) => (
              <Col sm={6} md={3} lg={2} key={wayang.id}>
                <Card onClick={event => this.showDetail(wayang.id)}>
                  <div style={{ height: 250, position: "relative" }}>
                    <Img src={wayang.image_url} style={{ width: "100%" }} />
                  </div>
                  <Card.Body>
                    <Card.Title as="h6">{wayang.nama}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <ModalComponent
                        id={wayang.id}
                        text="Ubah"
                        onSubmit={(value) => this.handleFS(value)}
                      />
                      &nbsp;
                      <Button
                        size="sm"
                        variant="danger"
                        disabled={deleting}
                        onClick={() => this.deleteWayang(wayang.id)}
                      >
                        {deleting ? "Tunggu.." : "Hapus"}
                      </Button>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default WayangList;
