import Sidebar from "../components/Sidebar";
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from "next/router";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { collection, orderBy } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import getOtherEmail from "../components/utils/getOtherEmail";
import Head from "next/head";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import { query, doc } from "firebase/firestore";


 
export default function Chat() {
    const router = useRouter();
    const  { id } = router.query;
    const [user] = useAuthState(auth);
    const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
    const [messages] = useCollectionData(q);
    const [chat] = useDocumentData(doc(db, "chats", id));

    console.log(chat);
    const getMessages = () => messages?.map(msg => {
            const sender = msg.sender == user.email;
            return(
                <Flex key={Math.random()} alignSelf={sender ? "flex-start" : "flex-end"} w="fit-content" minWidth="100px" bg={sender ? "blue.100" : "green.100" } borderRadius="lg" p={3} m={1}>
                    <Text>{msg.text}</Text>
                </Flex>
            )
        })
     return (
        <Flex
         h="100vh"
        >
            <Head><title>Chat</title></Head>
            
            <Sidebar />
            
            <Flex flex={1} direction="column">
                <Topbar email={getOtherEmail(chat?.users, user)}/>
                <Flex flex={1} direction="column" pt={4} mx={5} > 
                    {getMessages()}
                </Flex>
                <Bottombar  id={id} user={user}/>  
            </Flex>
        </Flex>
    )
}