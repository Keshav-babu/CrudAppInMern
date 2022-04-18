import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure,Box,Input,} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState } from "react"
import Axios from "axios"

export const DrawerExample=({user})=> {
  const [name,setName]=useState(user.name)
  const [age,setAge]=useState(user.age)
  const [city,setCity]=useState(user.city)
  const [country,setCountry]=useState(user.country)
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  console.log("user",user)
  const updateData=(id)=>{
      const data={
        name,age,city,country,
        _id:id
      }
      console.log(data,id)
      Axios.post("http://localhost:5000/update",data)
      .then((res)=>{
        console.log(res)
        window.location.reload()
      })
    }
  return (
    <>
      <Button ref={btnRef} colorscheme={'blue'} onClick={onOpen}>
        Edit
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update User</DrawerHeader>

          <DrawerBody>
            <Box w='100%' color='' border="1px solid green"  >
              Name:<Input value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
              Age: <Input value={age} type="Number" placeholder="Enter yout age" onChange={(e)=>setAge(e.target.value)}/>
              City:<Input value={city} placeholder="Enter your city" onChange={(e)=>setCity(e.target.value)}/>
              Country:<Input value={country} placeholder="Enter Country" onChange={(e)=>setCountry(e.target.value)}/> 
              
        </Box>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose }>Cancel</Button>
            <Button colorscheme='blue' onClick={()=>updateData(user._id)}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}