import React ,{useState,useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import LaunchContainer from './components/Launch';
import LaunchDetailsContainer from './components/LaunchDetails';
import NavBar from './components/Navbar/Navbar';


function App() {
  // const [id,setId]=useState(32);
  // const handleIdChange=useCallback((newId)=>{
  //   setId(newId)
  // }
  // ,[])
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<LaunchContainer/>}/>
        <Route path='/:id' element={<LaunchDetailsContainer/>}/>
      </Routes>
      {/* <LaunchContainer handleIdChange={handleIdChange}/> */}
    {/* <LaunchDetailsContainer id={id} /> */}
    </div>
  );
}

export default App;
