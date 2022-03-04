
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router,Switch as switching,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import  Switch  from "@material-ui/core/switch";
import  IconButton  from "@material-ui/core";
import  Brightness4Icon from "@material-ui/icons/Brightness4";
import {useState,useEffect} from 'react'

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
          </switching>
      </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

`
export default App;
