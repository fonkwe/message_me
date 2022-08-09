import { Flex, Text} from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/avatar'
import { IconButton, Button } from '@chakra-ui/button'
import { ArrowRightIcon } from '@chakra-ui/icons'

const Chat = () => {
    return(
        <Flex p={3} align="center" _hover={{bg: "gray.200", cursor: "pointer"}}>
        <Avatar src="" marginEnd={3}/>
        <Text>user@gmail.com</Text>
      </Flex>

    )
}
export default function Sidebar() {
    return(
       <Flex
       w="300px"
       h="100vh"
    //    bg="blue.100"
       borderEnd="1px solid" borderColor="gray.200"
       direction="column"
       >
        
       <Flex
        // bg="red.100"
        h="81px" w="100%"
        align="center" justifyContent="space-between"
        borderBottom="1px solid" borderColor="gray.200"
        p={3}
       >  

        <Flex align="center">
         <Avatar src="" marginEnd={3}/>
         <Text>Cliff Nji</Text>
        </Flex>
        
        <IconButton size= "sm" isRound icon={<ArrowRightIcon />} />

       </Flex>

       <Button m={5} p={4} >New Chat</Button>

        <Flex overflowX="scroll" direction="column"> 
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />

            <Chat />
            <Chat />

        </Flex>

      

       </Flex>
    )
}