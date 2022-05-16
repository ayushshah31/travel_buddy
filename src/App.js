import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import MyComponent from "./components/Map/SimpleMap.js";

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1 style={{"textAlign":"center"}}>Search Bar Here</h1>
            <Card />
            <MyComponent />
            <Footer />
        </div>
    );
}

export default App;
