import "./App.css";
import React, { useState  , useEffect} from "react";
import PalleteList from "./components/PalleteList";
import Palate from "./components/Palate";
import colorSeeds from "./seeds/colorSeeds";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import SinglePalete from "./components/SinglePalete";
import NewPaleteFrom from "./components/NewPaleteFrom";

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
      <Switch>
        <Route
          key="newPallete"
          exact
          path="/pallete/new"
          render={(routeProps) => (
            <NewPaleteFrom savePalette={savePalette} {...routeProps} />
          )}
        ></Route>

        <Route
          key="main"
          exact
          path="/"
          render={() => <PalleteList palletes={palettes} deletePallete={deletePallete} />}
        />

        <Route
          key="pallete"
          exact
          path={`/pallete/:id`}
          render={(routeProps) => (
            <Palate
              palate={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />

        <Route
          key="color"
          exact
          path="/pallete/:id/:colorId"
          render={(routeProps) => (
            <SinglePalete
              palette={generatePalette(findPalette(routeProps.match.params.id))}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
