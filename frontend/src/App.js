import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //switch =Routes
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import Home from "./Component/Home/Home";



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser()); //it is checking whether user is logged in or not
    }, []);


    const {isAuthenticated}= useSelector((state)=> state.user);

    return <Router>


        {isAuthenticated && <Header />}

        <Routes>
            <Route path="/" element={isAuthenticated?<Home/>:<Login />} />
        </Routes>
    </Router>;
}

export default App;