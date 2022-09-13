import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import NewPassword from "../pages/NewPassword";
import RecoveryPassword from "../pages/RecoveryPassword";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import '../styles/global.css'; 
import SendEmail from "../pages/SendEmail";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import AppContext from "@context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
             <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="new-password" element={<NewPassword/>}/>
                <Route path="recovery-password" element={<RecoveryPassword/>}/>
                <Route path="create-account" element={<CreateAccount/>}/>
                <Route path="my-account" element={<MyAccount/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="send-email" element={<SendEmail/>}/>
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
             </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
