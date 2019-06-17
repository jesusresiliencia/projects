import React,{Component} from 'react'
import MaterialTable from "material-table"
import banner from './banner03.gif'
import logoScytl from './logoScytl02.png'
import  "./styleBanner.css"
import $ from 'jquery'
import BasicFiltering from './Components/TableFilter'
import Example from './Components/tableFiltered02'
import createRowData from "./Components/createRowData"
import EnhancedTable from './Components/checkBoxTable'
import BasicGrouping from './Components/tableGrouping'

class Editable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Rodolfo', surname: 'Villaorduña', birthYear: 1982, birthCity: 35 },
          { name: 'Desirae', surname: 'Freedman', birthYear: 1981, birthCity: 36 },
          { name: 'Danny', surname: 'Roncal', birthYear: 1985, birthCity: 33 },
          { name: 'Jesus', surname: 'Retamozo', birthYear: 1988, birthCity: 30 },
        ],

        showFilterGrid:2
      }



    }
  
    componentDidMount(){
        $('.centered').fadeIn(3000)
    }

    render() {
        
const divStyle = {
    display: 'none'
  };

     

      return (

<div class="card-group">

  <div class="card">
  <h5 class="card-header">
  <div class="container">
  <img src={banner} alt="scytl" width="1400px"/>

  <img class="bottom-left" src={logoScytl} alt="scytl" width="150px" height="60px" />

<div class="centered" style={divStyle}>Ballot Delivery Web</div>

<div class="btn-group bottom-left-welcome">
  <button type="button" class="btn btn-outline-light"><i class="fa fa-user"></i> Welome {this.props.user.username}</button>
</div> 


<div class="btn-group bottom-right">
<div class="btn-group">
    <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown">
    <i class="fas fa-cloud"></i> Lan: English
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="https://www.youtube.com/channel/UC9IKtxn9AIGelnYmwYr0Lxw"><i class="fa fa-play"></i> English</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UC9IKtxn9AIGelnYmwYr0Lxw"> Spanish</a>
    </div>
  </div>


  <button type="button" class="btn btn-outline-light" onClick={this.props.onSignOut}><i class="fa fa-power-off"></i> Sign Out</button>
</div> 

  </div>


  </h5>

  <div class="card-body">

  <div class="row">
  <div class="col-sm-3">
  
<div class="card" >
  <h5 class="card-header"> Voter options</h5>
  <div class="card-body">
    <h5 class="card-title">Select kind of voter report </h5>
    <p class="card-text">With supporting for differents list options.</p>
         <p class="card-text"></p>
         <p class="card-text"><button class="btn btn-link" onClick={()=>{ this.setState({showFilterGrid:1 })}}><i class="fa fa-bullseye"></i>
         &nbsp;Voters - Hide filters</button></p>
         <p class="card-text"><button class="btn btn-link" onClick={()=>{ this.setState({showFilterGrid:2 })}}><i class="fa fa-filter"></i>
         &nbsp;Voters List and order</button></p>
         <p class="card-text"><button class="btn btn-link" onClick={()=>{ this.setState({showFilterGrid:3 })}}><i class="fa fa-list"></i>
         &nbsp;Create or Edit Voters</button></p>
         <p class="card-text"><button class="btn btn-link" onClick={()=>{ this.setState({showFilterGrid:4 })}}><i class="fa fa-check-square"></i>
         &nbsp;Checking and Paging Voters</button></p>
         <p class="card-text"><button class="btn btn-link" onClick={()=>{ this.setState({showFilterGrid:5 })}}><i class="fa fa-object-ungroup"></i>
         &nbsp;Grouping Voters</button></p>
  </div>
</div>

  </div>

  <div class="col-sm-9">
  <h5 class="card-title">List of Voter to elections 2020</h5>
    <p class="card-text">You can check the differents list options.</p>
   {(this.state.showFilterGrid===0 || this.state.showFilterGrid===1)?<Example rows={createRowData(50)} />: 
(this.state.showFilterGrid===2)?
<BasicFiltering/>:(this.state.showFilterGrid===3)?
   
    <MaterialTable
          title="Voters List"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              }),
          }}
        />:(this.state.showFilterGrid===4)?<EnhancedTable />:<BasicGrouping/>
    }
  </div>

</div>


   
         <p class="card-text"></p>
   
  </div>
</div>

  






</div>

      
      )
    }
  }

  export default Editable