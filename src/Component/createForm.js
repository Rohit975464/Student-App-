import { Component } from "react";

export default class CreateForm extends Component {
  render() {
    const { studentList, addNewRecord  , updateBranch} = this.props;
    return (
      <>
        <div className="container mt-5">
          <div className="form-row">
            <div className="col-md-6">
              <input
                ref={(inputName) =>this.name = inputName}
                type="text"
                placeholder="Enter Name"
                className="form-control"
              ></input>
            </div>
            <div className="col-md-6">
              <input
              ref={(rollInput)=>this.roll = rollInput}

                type="text"
                placeholder="Enter Roll Number"
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="form-row mt-3">
            <div className="col-md-6">
              <select
                className="form-control"
                ref={(branchInput)=>this.branch = branchInput}
              >
                <option>Select Branch</option>
                <option vlaue="CS">CS</option>
                <option vlaue="IT">IT</option>
                <option vlaue="EC">EC</option>
                <option vlaue="MECH">MECH</option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                ref={(mobileInput)=>this.mobile = mobileInput}
                type="phone"
                placeholder="Enter Number"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row mt-3">
            <div className="col-md-6">
              <button
                className="btn btn-warning "
                onClick={()=>addNewRecord(this.roll.value , this.name.value , this.branch.value , this.mobile.value)}
              >
                ADD
              </button>
            </div>

            <div className="col">
              <button className="btn btn-success ml-3" onClick={()=>updateBranch("CS")}>
                CS : (
                {
                  studentList.filter((student) => student.branch === "CS")
                    .length 
                }
                )
              </button>
              <button className="btn btn-primary ml-3" onClick={()=>updateBranch("IT")}>
                IT : (
                {
                  studentList.filter((student) => student.branch === "IT")
                    .length
                }
                )
              </button>
              <button className="btn btn-secondary ml-3" onClick={()=>updateBranch("EC")}>
                EC :(
                {
                  studentList.filter((student) => student.branch === "EC")
                    .length
                }
                )
              </button>

              <button className="btn btn-warning ml-3" onClick={()=>updateBranch("MECH")}>
                MECH : (
                {
                  studentList.filter((student) => student.branch === "MECH")
                    .length
                }
                )
              </button>
              <button className="btn btn-danger ml-3" onClick={()=>updateBranch("all")}>
                Total : ({studentList.length})
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
