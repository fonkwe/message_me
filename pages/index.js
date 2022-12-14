import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Sidebar from './components/Sidebar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Messager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Box>
         <Sidebar />
       </Box>
      
    </div>
  )
}
