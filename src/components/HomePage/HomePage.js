import Card from "../Card/Card";
import MyComponent from '../Map/SimpleMap'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className="container search-bar">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form">
                        <i className="fa fa-search search-icon"></i>
                        <input type="text" className="form-control form-input" placeholder="Search Place..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-details"><Card /></div>
            <div className="display-map"><MyComponent/></div>
        </div>
    );
}

export default HomePage;