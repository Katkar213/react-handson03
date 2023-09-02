import React,{Component} from 'react'
class Data extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<>
<div id="outercontainer">
{this.props.value.map((item,index)=>{
    return(
     
             <div key={index} id="list">
            <h3 id="h1">Name: {item.name}||Department: {item.Department}||Rating: {item.Rating}</h3>
        </div>
       
          )
     })}
</div>
<button onClick={this.props.value1}>Go back</button>
</>

        )
    }
}
export default Data

