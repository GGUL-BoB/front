import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import '@Styles/common.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import CommunityPage from '@Pages/CommunityPage';
// import LoginPage from '@Pages/LoginPage';
// import RegisterPage from '@Pages/RegisterPage';

const CommunityPage = lazy(() => import('@Pages/CommunityPage'));
const LoginPage = lazy(() => import('@Pages/LoginPage'));
const RegisterPage = lazy(() => import('@Pages/RegisterPage'));

const Main = () => {
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/main' />
                    </Route>

                    <Route path='/main' component={CommunityPage} />

                    <Route path='/board' component={CommunityPage} />

                    <Route path='/login' component={LoginPage} />

                    <Route path='/register' component={RegisterPage} />
                </Switch>
            </Suspense>
        </Router>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));
