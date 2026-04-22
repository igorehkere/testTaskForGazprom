import './App.css'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { MainPage } from './ui/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { UsersPage } from './ui/UsersPage';
import { PostsPage } from './ui/PostsPage';
import { UserDetails } from './ui/UserDetails';

function App() {

  return (
    <BrowserRouter>
      <Theme preset={presetGpnDefault}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/user/:id' element={<UserDetails/>}/>
        </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App
