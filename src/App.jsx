import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './context/ScrollContext';
import Home from './views/Home';


function App() { 

  return (
    <ScrollProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ScrollProvider>
  )
}

export default App
