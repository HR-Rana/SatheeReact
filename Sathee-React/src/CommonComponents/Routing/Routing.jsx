import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Homepage/Home";
import About from "../../Pages/About/About";
import Service from "../../Pages/Services/Service";
import Blog from "../../Pages/Blog/Blog";
import BlogView from "../Blogs/SingleBlogView/BlogView";
import Login from "../Registration/Login";
import Signup from "../Registration/Signup";
import Error from "../404/Error";
import Profile from "../../Pages/Profile/Profile";

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/BlogView/:id" element={<BlogView/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/*" element={<Error/>}/>
   </Routes>
  )
}


// const Router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App/>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/About",
// 				element: <About />,
// 			},
// 			{
// 				path: "/Services",
// 				element: <Service />,
// 			},
// 			{
// 				path: "/Blog",
// 				element: <Blog />,
// 			},
// 			{
// 				path: "/Blog/:id",
// 				element: <BlogView />,
// 			},
// 			{
// 				path: "/Login",
// 				element: <Login />,
// 			},
// 			{
// 				path: "/Registration",
// 				element: <Signup />,
// 			},
// 			{
// 				path: "/*",
// 				element: <Error />,
// 			},
// 		],
// 	},
// ]);

// export default Router;