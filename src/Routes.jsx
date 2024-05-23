import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Work from "./pages/Work"
import Code from "./pages/Code"
import CodeDetail from "./pages/CodeDetail"
import Page404 from "./pages/Page404"

const routes = [

    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/resume", element: <Resume /> },
    { path: "/contact", element: <Contact /> },
    { path: "/work", element: <Work /> },
    { path: "/code", element: <Code /> },
    { path: "/codeDetail/:id", element: <CodeDetail /> },
    { path: "*", element: <Page404 /> },
]

export default routes;