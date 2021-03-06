import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar,Homepage,Cryptocurrencies,CryptoDetails} from './components';
import './App.css';


const App = () => {
    return (
        <div className="app">
        <div className="navbar">
        <Navbar/>
        </div>
        <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>

                            </Route>
                         
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>

                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>

                            </Route>
                        </Switch>
                    </div>
     </Layout>
     
        <div className="footer" >
                <Typography.Title style={{color:'white',justifyContent:'centre'}}>
                    coingecko
                </Typography.Title>
               
                </div>
        </div>
    </div>
    )
}

export default App
