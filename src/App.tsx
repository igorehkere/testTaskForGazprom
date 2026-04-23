import './App.css'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { MainPage } from './ui/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { UsersPage } from './ui/UsersPage';
import { PostsPage } from './ui/PostsPage';
import { UserDetails } from './ui/UserDetails';
import { PostDetails } from './ui/PostDetails';

function App() {
  const basename = '/testTaskForGazprom';
  return (
    <BrowserRouter basename={basename}>
      <Theme preset={presetGpnDefault}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/users/:id' element={<UserDetails/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
        </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App
