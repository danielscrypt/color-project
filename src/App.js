import './App.css';
import PalleteList from './components/PalleteList';
import Palate from './components/Palate';
import colorSeeds from './seeds/colorSeeds';
import {generatePalette} from './colorHelper'
import { Route , Switch } from 'react-router-dom'
import SinglePalete from './components/SinglePalete';
import NewPaleteFrom from './components/NewPaleteFrom';


function App() {

  const findPalette = (id) => {
    return colorSeeds.find((pallete) => {
      return pallete.id === id ; 
    })
  }


  
 
  return (
    <div className="App">
      <Switch>

        <Route key="newPallete"
        exact
        path='/pallete/new'
        render={() => <NewPaleteFrom />} ></Route>


        <Route key='main' 
        exact 
        path='/' 
        render={() => 
        <PalleteList  palletes={colorSeeds} />} />

          <Route key='pallete'
           exact
           path={`/pallete/:id`} 
          render={ (routeProps) => 
          <Palate palate={generatePalette(findPalette(routeProps.match.params.id))} />} 
          />
        
          <Route key='color'
           exact
           path="/pallete/:id/:colorId" 
           render={ (routeProps) => 
           <SinglePalete 
            palette={generatePalette(findPalette(routeProps.match.params.id))}
            colorId={routeProps.match.params.colorId} />} 
           />
          
      </Switch>
    
    </div>

    
  );
}

export default App;
