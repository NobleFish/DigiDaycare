import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import { Pet } from './components/Pet';

const App: FC = () => {

    const name:string = "Test";
    
    return (
        <div className="App">
            <Pet name="PetName" />
        </div>
    );
}

export default App;
