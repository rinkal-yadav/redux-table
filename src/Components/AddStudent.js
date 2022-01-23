import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate , useParams } from 'react-router-dom';
import { addStudent , updateStudent } from '../Action/studentAction';


const AddStudent = () => {
    const [student, setStudent] = useState({ id: "" , name: "", age: "" , course: "" , batch: "" })
    const dispatch = useDispatch()
    const Navigate = useNavigate();
    const { Id } = useParams();
    const inputHandle=(e)=>{
      let name=e.target.name
      let value=e.target.value
      setStudent({ ...student , [name]: value})
      console.log(student);
  }

   const studentDataFromStore = useSelector((state) => state.studentReducer)
    // console.log(studentDataFromStore);
    useEffect(() => {
      const userdata = async () => {

        await studentDataFromStore.filter((filter) => filter.id === Id).map((value) => setStudent(value))
    
    }
        userdata();
  }, [Id,studentDataFromStore])


    
  

  



    const handleForm = event => {

        event.preventDefault();

        const { name, age, course, batch } = student;

        if ( name === '' ||age === '' ||course === '' ||batch === '') {
            alert("all fields are compulsory");
            return;
        }
        // const updateid=`${studentDataFromStore.id}`;
        // const updateid =studentDataFromStore.id.toString()

        if(!Id =="" ){
          console.log(Id);
          const Data = {...student , id:Id}
        dispatch(updateStudent(Data))
        

        }
        else {
          const newid=`${studentDataFromStore.length+1}`;

          const Data = {...student,id:newid} 
        console.log("add new data abhi kiya hai ",Data);

        dispatch(addStudent(Data))


        }
        

        Navigate('/student')
    }
    
    return (
        <div >
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="name" name='name' label="Name" variant="outlined" value={student.name} onChange={inputHandle}/>
      <TextField required id="age" name='age' label="Age" variant="outlined" value={student.age} onChange={inputHandle}/>
      <TextField required id="course" name='course' label="Course" variant="outlined" value={student.course} onChange={inputHandle}/>
      <TextField required id="batch" name='batch' label="Batch" variant="outlined" value={student.batch} onChange={inputHandle}/>
    </Box>

     <button onClick={handleForm} className="add-student-btn add-form-btn" >Add Student</button> 

     {/* {studentDataFromStore.map((student, id) => <Student key={id} studentObj={student} />)} */}

    </div>

        // <div>
        //     <h1>Add New Student</h1>
        //     <form onSubmit={handleForm} >
        //         <div class="form-group mb-3">
        //             <label htmlFor="exampleInputEmail1">Name</label>
        //             <input type="text" onChange={(e) => setStudent({ ...student, name: e.target.value })} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
        //         </div>
        //         <div class="form-group mb-3">
        //             <label htmlFor="exampleInputPassword1">Email</label>
        //             <input type="text" onChange={(e) => setStudent({ ...student, email: e.target.value })} class="form-control " id="exampleInputPassword1" placeholder="Enter Email"/>
        //         </div>
                
        //         <button type="submit" class="btn btn-primary">Add Student</button>
        //     </form>
            

        //     {studentDataFromStore.map((student, id) => <Student key={id} studentObj={student} />)}

        // </div>

    )
}

export default AddStudent