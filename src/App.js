
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router,Switch as switching,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import  Switch  from "@material-ui/core/switch";
import  IconButton  from "@material-ui/core";
import  Brightness4Icon from "@material-ui/icons/Brightness4";
import {useState,useEffect} from 'react'
import ResumePage from "./Pages/ResumePage";
import ProductPage from "./Pages/ProductPage";
import DetailPage from "./Pages/DetailPage";

// redux setup
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./redux/reducers/index";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";
const store = createStore(rootReducer)

function App() {
  const [theme,setTheme] = useState('dark-theme')
  const[checked,setChecked] = useState(false) 

  const themeToggler = () => {
    if (theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    }else{
      setTheme('light-theme')
      setChecked(true)
    }
  }
  useEffect(()=>{
    document.documentElement.className = theme;
  },[theme])

  return (
    <Provider store={store}>
    <div className="App">
      <Sidebar/>
      <MainContentStyled className="main-content">

        <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4Icon/>
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{'arial-lable': ''}}
                size= "medium"
                onClick= {themeToggler}
              />
            </div>
        </div>

          <switching>
            <Route path="/" exact><HomePage/></Route>
            <Route path="/about" ><AboutPage/></Route>
            <Route path="/resume" ><ResumePage/></Route>
            <Route path="/product" ><ProductPage/></Route>
            <Route path="/detail/:id/title/:title">
              <DetailPage/> </Route>
            <Route path="/cart"><CartPage/></Route>
            <Route path="/contact" ><ContactPage/></Route>
          </switching>
      </MainContentStyled>
    </div>
    </Provider>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

`
export default App;
