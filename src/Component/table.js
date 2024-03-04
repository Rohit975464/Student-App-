import { Component } from "react";

export default class Table extends Component{
    render(){
         const {studentList , deleteRecord , defaultBranch} = this.props;

        return<>
            <div className="container mt-5">
                 <table className="table table-bordered text-center table-striped table-hover                   
                  text-black">
                    <thead className="thead-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Mobile</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentList.filter(student=>student.branch === defaultBranch || defaultBranch === "all").map((student,index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.roll}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td>{student.mobile}</td>
                            {/* <td><button className="btn btn-danger">Delete</button></td> */}
                           <button className="btn btn-danger text-center mt-2" onClick={()=>deleteRecord(student.roll)}><i class="fa-sharp fa-solid fa-trash" ></i> </button> 
                        </tr>)}
                    </tbody>
                    </table>
            </div>
        </>
    }
}