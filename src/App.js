import React from "react";
import Speed from "./Speed";
import speedData from "./speedData";
import "./styles/styles.css";

class App extends React.Component{
constructor(){
super()
this.state = {
  data: speedData
}
}

  render(){
    const speedComponent = this.state.data.map(points => <Speed key={points.id} item={points.item}/>)
    return(
       <div className="container">
       <h1>Page Speed Checklist</h1>
          {speedComponent}
       </div>
    )
  }
}

export default App