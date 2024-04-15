import LandingPage from './landingPage/LandingPage';
import MainPage from './mainPage/MainPage';
import NotFound from './notFound/NotFound';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
// export {default as LandingPage } from './landingPage/landingPage';
const Index = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/app' element={<MainPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Index;