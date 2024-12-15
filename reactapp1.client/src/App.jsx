import './App.css';
import RankItems from './components/RankItems';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsByType from './components/ItemsByType';
import { Navbar, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                        <NavLink tag={Link} style={{ marginRight: "50px" }} className="text-dark" to="/">Home</NavLink>
                        <NavLink tag={Link} style={{ marginRight: "50px" }} className="text-dark" to="/item/bytype/1">Movies</NavLink>
                        <NavLink tag={Link} style={{ marginRight: "50px" }} className="text-dark" to="/item/bytype/2">Albums</NavLink>
                    </Navbar>
                </header>
                <Routes>
                    <Route path="/" element={<RankItems />} />
                    <Route path="/item/byid/:id" element={<ItemDetail />} />
                    <Route path="/item/bytype/:type" element={<ItemsByType />} />
                </Routes>
            </Router>
        </div>
    )
};

export default App;