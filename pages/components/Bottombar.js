import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useState } from "react";



export default function Bottombar({id, user}) {

    const [input, setInput] = useState("");

    const sendMessage = async(e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/${id}/messages`), {
            text: input,
            sender: user.email,
            timeStamp: serverTimestamp() 
        })
        setInput("");

    }
    console.log(input)

    return(
        <FormControl
           p={3}
           onSubmit={sendMessage}
           as="form"
        >
          <Input placeholder="Type a message..." autoComplete="off" onChange={e => setInput(e.target.value)} value={input} />
          <Button type="submit" hidden>Submit</Button>
        </FormControl>

    )

}