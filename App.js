import  {BrowserRouter,Routes,Route,} from "react-router-dom";
import './App.css';
import Action from "./pages/action";
import Climate from "./pages/climate";
import Home from "./pages/home";
import Population from "./pages/population";
import Science from "./pages/science";
import './pages/CSS/home/index.css'
import './pages/CSS/action/Act.css'

import "./pages/CSS/population/pop.css"
import "./shared_components/components/css/youTube.css"
import "./pages/CSS/climate/clim.css"
import "./shared_components/components/css/contact.css"
import "./shared_components/components/css/scienGrid.css"
import "./shared_components/components/css/newc.css"
import Navbar from "./shared_components/nav";
import NavBar from "./shared_components/Layout/nav2";
import "./shared_components/Layout/nav2.css"

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/population" element={<Population/>} />
              <Route path="/science" element={<Science/> } />
              <Route path="/climate" element={<Climate/>}  />
              <Route path="/take_action" element={<Action/>} />
   
            </Routes>
          </BrowserRouter>
         
  )
}


// function App() {
  
//   return (
//     <>
     
//        <BrowserRouter>
//        <NavBar/>

//         <div className="pages">
//           <Routes>
//             <Route exact path="/" component={Home} />
//             <Route path="/population" component={Population} />
//             <Route path="/science" component={Science} />
//             <Route path="/climate" component={Climate} />
//             <Route path="/take_action" component={Action} />
          
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
