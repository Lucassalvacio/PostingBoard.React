import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NewPost, {action as addNewPost} from './components/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import App, {loader as postLoader} from './routes/App.jsx'
import { deletePost } from './components/Post.jsx'
import PostDetails, {loader as postDetailLoader} from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:[
      {
        path: '/',
        element: <App />,
        loader: postLoader,
        children:[
          {
            path: '/new-post',
            element: <NewPost/>,
            action: addNewPost
          },
          {
            path: "/posts/:id/delete",
            action: deletePost
          },
          {
            path: "/posts/:id",
            element: <PostDetails />,
            loader: postDetailLoader
          }
        ]
      },
    ]
  },
 
 
    
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
