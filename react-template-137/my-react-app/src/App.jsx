import "./App.css";
import { getGenderByName, getNationalByName } from "./script/request";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main">
          <GenderForm/>
        </div>
      </div>
    );
  }
}

function Header() {
  return (
    <header className="header">
      <h1>Enter name to find gender and country</h1>
    </header>
  );
}

class GenderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      national: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    this.setState({ name: name });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const genderInfo = await getGenderByName(this.state.name);
    const nationalInfo = await getNationalByName(this.state.name);

    this.setState({
      gender: genderInfo,
      national: nationalInfo,
    });

  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input value={this.state.name}onChangeValue={this.handleChange}/>
        <Button/>
        <Result national={this.state.national} gender = {this.state.gender}/>
      </form>
    );
  }
}

function Input(props) {
  function handleChange(event) {
    props.onChangeValue(event.target.value);
  }

  return (
    <input className="form-input" value={props.name} onChange={handleChange}/>
  );
}

function Button(){
  return <input className="form-btn" type="submit" value="Отправить" />
}

function Result(props){
  return(
    <div>
      <div className="form-answer">Gender: {props.gender}</div>
      <div className="form-answer">National: {props.national}</div>
    </div>
  )
}


export default App;
