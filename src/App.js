
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import { ROUTER } from './Router';
import "./Projectone.css";
function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Routes>
      {ROUTER.map((val)=>{
        return <Route exact path={val.url} element={<val.component/>}></Route>
      })}
     </Routes>

     </div>
    </BrowserRouter>
  );
}

export default App;
