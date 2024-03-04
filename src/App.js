import "./App.css";
import { Component } from "react";
import Header from "./Component/header";
import CreateForm from "./Component/createForm";
import Table from "./Component/table";
import StudentData from "./Component/studentdata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: StudentData,
      defaultBranch : "all"
    };
  }
  addNewRecord = (roll, name, branch, mobile)  => {
    let newData = { roll, name, branch, mobile };
    this.setState({ studentList: [...this.state.studentList, newData] });
  };

  deleteRecord = (roll) => {
    if (window.confirm("Are You Sure?")) {
      let index = this.state.studentList.findIndex(
        (student) => (student.roll = roll)
      );
      this.state.studentList.splice(index, 1);
      this.setState({ studentList: [...this.state.studentList] });
    }
  };

  updateBranch=(Branch)=>{
      this.setState({defaultBranch : Branch})
  }


  render() {
    return (
      <>
        <Header />
        <CreateForm studentList={this.state.studentList} addNewRecord={this.addNewRecord} updateBranch = {this.updateBranch}
        />
        <Table
          studentList={this.state.studentList}deleteRecord={this.deleteRecord}defaultBranch = {this.state.defaultBranch}
        />
      </>
    );
  }
}

export default App;
