import "./App.css";
import React, { useState  , useEffect} from "react";
import PalleteList from "./components/PalleteList";
import Palate from "./components/Palate";
import Page from "./components/Page";
import colorSeeds from "./seeds/colorSeeds";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import SinglePalete from "./components/SinglePalete";
import NewPaleteFrom from "./components/NewPaleteFrom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
// import { v4 as uuidv4 } from 'uuid';


function App() {
  const savedPalletes =  JSON.parse(window.localStorage.getItem('palletes'))
  const [palettes, setColorSeeds] = useState(savedPalletes || colorSeeds);

  const savePalette = (newPalette) => {
    setColorSeeds([...palettes, newPalette] );
  };

  const syncLocalStorage = () => {
    window.localStorage.setItem('palletes', JSON.stringify(palettes))
  }

  useEffect(() => {
    syncLocalStorage()
  });

  const findPalette = (id) => {
    return palettes.find((pallete) => {
      return pallete.id === id;
    });
  };

  const deletePallete = (id) => {
    setColorSeeds(palettes.filter(palette => palette.id !== id))
  }

  
  return (
    <div className="App">
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={300}
        classNames="item">
         <Switch location={location}>
         <Route
           key="newPallete"
           exact
           path="/pallete/new"
           render={(routeProps) => (
            <Page>
             <NewPaleteFrom savePalette={savePalette} {...routeProps} />
             </Page>
           )}
         ></Route>
 
         <Route
           key="main"
           exact
           path="/"
           render={() => <Page> <PalleteList palletes={palettes} deletePallete={deletePallete} /> </Page>}
         />
 
         <Route
           key="pallete"
           exact
           path={`/pallete/:id`}
           render={(routeProps) => (
             <Page>
             <Palate
               palate={generatePalette(findPalette(routeProps.match.params.id))}
             />
             </Page>
           )}
         />
 
         <Route
           key="color"
           exact
           path="/pallete/:id/:colorId"
           render={(routeProps) => (
             <Page>
             <SinglePalete
               palette={generatePalette(findPalette(routeProps.match.params.id))}
               colorId={routeProps.match.params.colorId}
             />
             </Page>
           )}
         />
       </Switch>
       </CSSTransition>
       </TransitionGroup>
      )} />
     
    </div>
  );
}

export default App;
