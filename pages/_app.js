import Login from "./components/Login"
import { ChakraProvider} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return(
    <ChakraProvider>
        <Sidebar />

    </ChakraProvider>

  )

}

export default MyApp
