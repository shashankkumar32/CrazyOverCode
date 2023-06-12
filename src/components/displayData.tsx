import React from 'react'
import { useSelector } from "react-redux";
import {Button ,Box}from "@mui/material"

const DisplayData:React.FC = () => {
    const Data = useSelector((state) => state);
  return (
    <Box>
        {
            JSON.stringify(Data)
        }
        <Box>
         
            </Box>
        </Box>
  )
}

export default DisplayData