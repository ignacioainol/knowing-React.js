import React from 'react';
import './App.css';

// function Helloworld(props){
//   console.log(props);
//   return(
//     <div id="hello">
//      <h3>{props.subtitle}</h3>
//     { props.mytext }
//     </div>
//   );
// }

class Helloworld extends React.Component{

  state = {
    show: true
  }

  toggleShow(){
    this.setState({ show: false });
   }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        { this.props.mytext }
        <button onClick={ this.toggleShow.bind(this) }>Toggle show</button>
        </div>
      )
    }else{
      return <h1>There are no elements </h1>
    }
  }
}

function App() {
  return (
   <div>This is my component: <Helloworld mytext="Ignacio" subtitle="To Santiago"/> <Helloworld mytext="seba" subtitle="To Ukranie" /> <Helloworld mytext="osvaldo" subtitle="to Concepcion Center"/> </div>
  );
}

export default App;
