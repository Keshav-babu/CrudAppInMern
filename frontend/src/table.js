import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,Button, Input,} from '@chakra-ui/react'
import Axios  from 'axios'
// import { useState } from 'react'
import {DrawerExample} from "./drawer"
export const Table1=({data})=>{
 // console.log(data)
    

    const deleteData=(id)=>{
      Axios.post("http://localhost:5000/delete",{_id:id})
      .then((res)=>
        window.location.reload()
      )
    }

    
    return <>
    <h3>Table</h3>
    <TableContainer w="60%" >
  <Table  colorScheme='teal'>
    <TableCaption>CRUD App in MREN Stack and Chakra UI</TableCaption>
    <Thead>
      <Tr>
        <Th>Sl No.</Th>
        <Th>Name</Th>
        <Th >Age</Th>
        <Th >City</Th>
        <Th >Country</Th>
        <Th >Edit</Th>
        <Th >Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.map((user,index)=>(
          <Tr key={user._id}>
            {console.log(user._id)}
            <Td>{index+1}</Td>
            
              <Td>{user.name}</Td>
            
            
            <Td>{user.age}</Td>
            <Td>{user.city}</Td>
            <Td>{user.country}</Td>
            
            <Td> <DrawerExample user={user}/> </Td>
            <Td> <Button onClick={()=>deleteData(user._id)} >Delete</Button> </Td>
          </Tr>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>
    
    </>
}