
import Requests from './pages/Requests'
import About from './pages/About'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import RandomLink from './pages/RandomLink'
import UserDetails from './pages/UserDetails'
import Post from './pages/Post'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Requests/>}/>
        <Route path="requests" element={<Requests/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="randomlink" element={<RandomLink/>}/>
        <Route path="/:username" element={<UserDetails/>}/>
        <Route path='/post/:id' element={<Post/> }/>
        <Route path="*" element={<Error/>}/>

      </Routes>
    </>
  )
}

export default App;
