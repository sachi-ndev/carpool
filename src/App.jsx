import Nav from "./components/page/nav"
import Home from "./components/page/home"
// import Userin from "./components/page/userin"
import Login from "./components/page/logintogle"
// import Log from "./components/log"
// import Signin from "./components/signin"
// import Host from "./components/host"
import Finder from "./components/page/findtogle"
import Map from "./components/map"


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {

  return (

    <div>
    <Router>
      <Nav/>
      <Routes>

      <Route path="/" element={<Home/>}/>  
      <Route path="/log" element={<Login/>}/>
      <Route path="/host" element={<Finder/>}/>
      {/* <Route path="/signin" element={<Signin/>}/> */}
        
      </Routes> 

    </Router>
    </div>   
  )
}

export default App
