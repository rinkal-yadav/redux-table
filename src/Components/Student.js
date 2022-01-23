import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
import {   useSelector } from 'react-redux'

const Student = ({ studentObj }) => {

    // const [addbtn,setAddbtn] = useSelector((state) => state.buttonReducer)
    
    // const btnclick =()=>{setAddbtn("Add Student")}

    // const Dispatch = useDispatch();
    // const Navigate = useNavigate();
    // const { name, age, course, batch } = studentObj

    const studentDataFromStore = useSelector((state) => state.studentReducer)

    return (
        <div >
          <div className="table-heading">
        <h1>Students Details</h1>
        <button className="add-student-btn"><NavLink to="/addstudent" style={{ textDecoration: "none", color: "black" }}> Add Student</NavLink></button>
      </div>
        
<TableContainer >
      <Table  sx={{ maxWidth: 900 }} className='table-main' >
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Course</TableCell>
                      <TableCell align="right">Batch</TableCell>
                      <TableCell align="right">Change</TableCell>
                  </TableRow>
              </TableHead>

          <TableBody>
              {studentDataFromStore.map((row) => (
            
                <TableRow
                    key={row.id}
                  // key={name}
                
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">{row.batch}</TableCell>
                      <TableCell align="right"  ><NavLink to={(`/student/des/${row.id}`)} style={{textDecoration:"none"}} > edit </NavLink></TableCell>
                </TableRow>
         ))}
          
          </TableBody>
      </Table>
    </TableContainer>
        </div>


    //     <div className='d-flex flex-row m-4' >
    //         <div className="card text-white bg-danger mb-3" style={{width:"300px" }}>
    //             <div className="card-header">{name}</div>
    //             <div className="card-body">
    //                 <h5 className="card-title">{email}</h5>
    //             </div>
    //         </div>

    //    </div>
    )
}

export default Student
