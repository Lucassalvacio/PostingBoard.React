import React, { useState } from 'react'
import '../styles/App.css'
import PostList from '../components/PostList'
import { Outlet } from 'react-router-dom'



const App = () => { 
  const [modalVisible, setModalVisible] = useState(false);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalhandler() {
    setModalVisible(true);
  }
  return (
  <div className='main'>
    <Outlet />
    <main >
      <PostList isVisible={modalVisible} onHideModal={hideModalHandler}/>
    </main>
  </div>
    
  )
}

export default App

export async function loader() {
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  const response = await fetch("http://localhost:8080" + "/posts");
  const responseData = await response.json();
      // setPostData(responseData.posts);
      // setIsFetching(false);
    // }

  //   fetchPosts();
  // }, [dataChanged]);

  return responseData.posts
}