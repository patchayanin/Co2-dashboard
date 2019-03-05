import React, { Component } from 'react';
import Button,{Card,Row} from 'react-bootstrap';
import Donut from './component/donutChart'
// import Bar from './component/barChart'
// import RealtimeChart from './component/realtimeChart'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.state = {
      data : [],
      sumcarbon : 100,
      load : false,
      date:date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()
    }
  }

  componentWillMount(){
    console.log("compontWillMount")
  }

  getData = () => {
    fetch("https://calculate-carbon.herokuapp.com/api/user/all", {
      method: 'GET',
      headers: {'Content-Type': 'application/JSON'},
      // body: JSON.stringify(reqBody)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
    
  renderCard = (header) => {
    return(
      <div class="col-md-3">
      <Card bg="dark" text="white" style={{ width: '23rem' , height:'23rem'}}>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        {this.getData()}
        {/* {this.renderGraph(Donut)} */}
        <Donut sum={this.state.sumcarbon}/>
        {/* {this.state.load 
          ? ( <Donut  />) 
          : ('loading.....')
        } */}
      </Card.Body>
      </Card>
    </div>
    )
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="h2">Carbon Dashboard</div> 
          <div class="h3">{this.state.date}</div> 
        </div>
        <Row>
          {this.renderCard("COST")}
          {this.renderCard("CHANGE IN COST")}
          {this.renderCard("CARBON FOOTPRINT")}
          <div class="col-md-3">
            <Card bg="dark" text="white" style={{ width: '77rem' , height:'23rem'}}>
            <Card.Header>COST</Card.Header>
            <Card.Body>
              {/* <RealtimeChart data={this.state.data}/> */}
            </Card.Body>
          </Card> 
          </div>
        </Row>
       </div>
    );
  }
}

export default App
