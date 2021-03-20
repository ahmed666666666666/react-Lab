import './App.css';
import React from 'react'
class App extends React.Component {

  state = {
    count:0
  }
  
  increase = () => {
    this.setState({count : this.state.count += 1})
  }

  render(){
  return(
  
   <center><div style={{marginTop : '200px'}}>

      <div style={{fontSize:'90px', color:'white',}} >{this.state.count}</div>
      <button style={{width:'200px' ,fontSize:'30px', height:'70px',background:'white'}} onClick={this.increase}>Increase Count </button>
   </div>  
   </center>
  );
  }
  }

export default App;