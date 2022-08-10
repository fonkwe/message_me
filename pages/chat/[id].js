import Sidebar from "../components/Sidebar";
import { Flex, Heading} from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/avatar'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'

const Topbar = () => {
    return(
        <Flex
           bg="gray.200"
           h="81px" w="100%"
           align="center"
           p={5}
        >
           <Avatar src="" marginEnd={3}/>
           <Heading size="lg">user@gmail.com</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return(
        <FormControl
           p={3}
        >
          <Input placeholder="Type a message..." />
          <Button type="submit" hidden>Submit</Button>
        </FormControl>

    )

}

export default function Chat() {
    return (

        <Flex>
            <Sidebar />

            <Flex flex={1} direction="column">
                <Topbar />

                <Flex flex={1}></Flex>
                <Bottombar />

            </Flex>
        </Flex>
    )
}