import { TextField } from '@mui/material'
import React from 'react'

const InputElement = ({label , value , onChange}) => {
  return (

    <div className='w-full p-4'>
        <TextField 
        id='outlined-basic' label= {label} value={value} fullWidth onChange={(e) => onChange(e.target.value.toLowerCase())}/>
    </div>
    
  )
}

export default InputElement