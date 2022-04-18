// import { Box } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { useState } from "react";
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import Axios from "axios"

export const Create=()=>{
    const [name1, setName] = useState(null);
    const [age1, setAge] = useState(null);
    const [city1, setCity] = useState(null);
    const [country1, setCountry] = useState(null);

    const postData=()=>{
        const data={
            name:name1,
            age:age1,
            city:city1,
            country:country1

        }
        Axios.post("http://localhost:5000/create",data)
        .then((res)=>{
            window.location.reload()
        })
    }
    return <>
        <Box w='19%' color='' border="1px solid"  >
        Name:<Input placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        Age: <Input type="Number" placeholder="Enter yout age" onChange={(e)=>setAge(e.target.value)}/>
        City:<Input placeholder="Enter your city" onChange={(e)=>setCity(e.target.value)}/>
        Country:<Input placeholder="Enter Country" onChange={(e)=>setCountry(e.target.value)}/> 
        <Button colorScheme='blue' size='md' onClick={()=>postData()}>Post</Button>
        </Box>
    </>
}