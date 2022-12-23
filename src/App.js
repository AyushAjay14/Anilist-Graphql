import './App.css';
import HomePage from './pages/homePage';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <HomePage/>
    </>
  );
}

export default App;
