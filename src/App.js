import './App.css';
import ScrollToTop from './scrollToTop'
import HomePage from './pages/homePage';
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import HotAnimePage from './pages/hotAnimePage';
import Popularpage from './pages/popularPage';
import AlltimePage from './pages/allTimePage';
import Top100AnimePage from './pages/top100Page';
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
`
function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Routes>
        <Route exact path="/" element={<HomePage/>} basename = '/' />
          <Route index element={<HomePage />} />
          <Route exact path="/hotanime" element={<HotAnimePage />} />
          <Route exact path="/popular" element={<Popularpage />} />
          <Route exact path="/alltime" element={<AlltimePage />} />
          <Route exact path="/top100" element={<Top100AnimePage />} />
      </Routes>
      </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}

export default App;
