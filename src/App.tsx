import React, { FC, useState } from 'react'
import { Sidebar } from './compontents/Sidebar';
import "./styles.scss";
import { Redirect, Route, Switch } from 'react-router-dom'
import CabinetPage from './compontents/CabinetPage/CabinetPage';

const App:FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );
  return (
    <div className="App__personal-account-container">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
      <div
        id="content-wrapper"
        className="App__personalaccount-wrapper non-auth"
      > 
      <Switch>
        <Route path='/cabinet' exact>
          <CabinetPage />
        </Route>
        <Redirect to='/' />
      </Switch>
      </div>
    </div>
  )
}

export default App
