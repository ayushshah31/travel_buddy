import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Card from "./components/Card/Card";
// import MyComponent from "./components/Map/SimpleMap.js";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';
import Reviews from "./components/Review/Reviews";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/signup" element={<SignUpPage/>} />
                        <Route exact path="/login" element={<LoginPage/>} />
                        <Route exact path="/reviews" element={<Reviews/>} />
                        <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
