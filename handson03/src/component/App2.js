import React,{Component} from "react"
import Data from "./Data"

class UseEffect extends  Component{
constructor(){
    super();
    this.state={
        name:"",
     Department:"",
     Rating:"" ,
     stdData:[] , 
     toggle:"true"
    };
}
handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value});
};


handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.name.length>0&&this.state.Department.length>0&&this.state.Rating.length>0){
        const tempObj={
            name:this.state.name,
            Department:this.state.Department,
            Rating:this.state.Rating
        }
        this.state.stdData.push(tempObj)
        alert("Form filled")
    }
    else{
        alert("Enter valid data in all field..")
    }
this.setState({
    stdData:this.state.stdData,
    name:"",
    Department:"",
    Rating:"",
    toggle:false,
});
console.log(this.state.stdData)
};
toggleFun = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log("hello")
  };

render(){

    return(

<>
<h1 id="heading">Employee Feedback Form</h1>
{this.state.toggle?<form>
    <label id="font" htmlFor="name">Name:     </label> 
<input  type="text" name="name" id="name" onChange={this.handleChange}  value={this.state.name}></input> <br/><br/>

<label id="font" htmlFor="Department">Department:  </label>
<input type="text" name="Department" id="Department" onChange={this.handleChange} value={this.state.Department}></input><br/><br/>

<label id="font" htmlFor="Ratings">Rating:  </label>
<input type="number" name="Rating" id="Ratings" onChange={this.handleChange} value={this.state.Rating}></input> <br/><br/>


<button onClick={this.handleSubmit}>Submit</button>
</form>:<Data  value={this.state.stdData} value1={this.toggleFun}/>}



</>
    )
}

}

export default UseEffect


