import React  from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { addToArray } from "./slice/rootReducer";
import { useSelector } from "react-redux";
import {Button,TextField ,Box}from "@mui/material"
import AddData from './components/addData'
import DisplayData from './components/displayData'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Box sx={{}}>
            <AddData/>
     
            </Box>
       <Box sx={{mt:6}}>
        <DisplayData/> 
        </Box>
        
        </Box>
        
        
       
      </header>
    </div>
  );
}

export default App;
