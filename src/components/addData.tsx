import React from 'react'
import { useDispatch } from "react-redux";
import { addToArray } from "../slice/rootReducer";
import {Button,TextField ,Box}from "@mui/material"

interface props{

}
const AddData:React.FC<props> = () => {
      const [name,setName]=React.useState('')
      const dispatch=useDispatch()
      const AddCartItem = (text:any) => {
    dispatch(addToArray({ name:text}));
  };
  return (
    <Box>
    <Box sx={{background:"#fff"}}>
  <TextField name={'name'} onChange={e=>setName(e.target.value)} />
  <Button sx={{mt:1,ml:2}}  variant="contained"onClick={()=>AddCartItem(name)}>
    ADD
  </Button>
      </Box>
      </Box>
  )
}

export default AddData