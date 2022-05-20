
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Post/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
