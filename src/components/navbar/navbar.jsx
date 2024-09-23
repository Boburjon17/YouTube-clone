import { Box, Stack } from '@mui/material'
import React from 'react'
import {logo} from '../../constants/index'
import {SearchBar} from '../index'
import {color} from '../../constants/color'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{position:'sticky',top:0, zIndex:999, background:color.primary}} >
        <Link to={'/'}>  <img src={logo} alt="logo" height={70}  /></Link>
      
        <SearchBar/>
        <Box></Box>
    </Stack>
  )
}

export default Navbar