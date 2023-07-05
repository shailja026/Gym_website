
import './App.css';
import About from './component/About';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import SearchExercise from './component/SearchExercise';
import { useState } from 'react';
import Exercise from './component/Exercise';
import Trainer from './component/Trainer';
import PriceCard from './component/PriceCard';
import Footer from './component/Footer';


function App() {
   const [exercises, setExercises] = useState([])
  const [bodyPart , setBodyPart] = useState("all")
  return (
    <div className="App">
     <Home/>
     <About/>
     {/* <SearchExercise 
     setExercises={setExercises}
     bodyPart={bodyPart}
     setBodyPart={setBodyPart}
     />
     <Exercise
      setExercises={setExercises}
      exercises={exercises}
      bodyPart={bodyPart}
    /> */}
     <Trainer/>
     <PriceCard/>
     <Footer/>
     
    
    </div>
  );
}

export default App;
