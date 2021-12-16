import './App.css';
import PalleteList from './components/PalleteList';
import Palate from './components/Palate';
import colorSeeds from './seeds/colorSeeds';
import {generatePalette} from './colorHelper'
import { Route , Routes , useParams } from 'react-router-dom'
import SinglePalete from './components/SinglePalete';


function App() {

  const findPalette = (id) => {
    return colorSeeds.find((pallete) => {
      return pallete.id === id ; 
    })
  }

  const  {id}  = useParams(); 

  
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PalleteList  palletes={colorSeeds} />} />

          <Route path={`/pallete/:id`} 
          element={<Palate params={Route.Provider} palate={generatePalette(colorSeeds[5])} />} 
          />
          {/* <Route path='/pallete/:id'
           render={routeProps => (
            <Palate
              palette={generatePalette(
                findPalette(routeProps.matches.params.id)
              )}
            />
          )}
          /> */}

          <Route path="/pallete/:id/:colorId" 
           element={<SinglePalete 
            palette={generatePalette(colorSeeds[5])}
            colorId='protosspylon' />} 
           />
          
      </Routes>
    
    </div>

    
  );
}

export default App;
