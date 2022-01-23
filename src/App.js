import './App.css';
import AddStudent from './Components/AddStudent';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
       <Router>
                <Header/>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/student' element={<Student/>}/>
                    <Route path='/student/des/:Id' element={<AddStudent/>}/> for edit student
                    <Route path='/contact' element={<ContactUs/>}/>
                    <Route path='/addstudent' element={<AddStudent/>}/> for add student button 
                    
                </Routes>

                
                </Router> 
    </div>
  );
}

export default App;
