import React from 'react';
import Router from "./component/Router/Router";
import ContainerHeader from "./component/Header/Container-Header";
import LeftMenu from "./component/LeftMenu/LeftMenu";
import PopUpInfo from "./hooks/popUpInfo";




function App() {
  return (
      <div className="App">

        <ContainerHeader/>
          <div className="App-block">
        <LeftMenu/>
          <div className="content">
              <div className="content-block">
                  <Router/>
              </div>
          </div>
              <div className="rightMenu">
              </div>
        </div>
      </div>

  );
}

export default App;

