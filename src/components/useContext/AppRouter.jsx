import React from 'react'
import {AboutScreen} from './AboutScreen'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from "react-router-dom";
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
import { Error404 } from './Error404';


export const AppRouter = () => {
    return ( 
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/about' element={<AboutScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    
                    <Route path='*' element={<Error404/>}/>
                </Routes>

            </div>
        </Router>
    )
}
