import logo from './logo.svg';
import './App.css';
import Welcome from './components/test';
import Clothes from './Clothes';
import StageComponent from './components/stages';
import ForceUpdate from './forceUpdate.tsx';
import DomNode from './domNode.tsx';
import ComponentLifeCycle from './componentLifeCycle';
import HandleEvent from './components/handleEvent/handleEvents';
function App() {
  return (
    <div>
      {/* <Welcome />
      <hr></hr> */}
      {/*
      <ForceUpdate /> ForceUpdate
      <hr></hr> */}
      {/* <DomNode /> Dom Node
      <hr></hr> */}
      {/* <ComponentLifeCycle /> */}
      <HandleEvent/>
      <hr />
    </div>
    /* Prop*/
    // <div>
    //   <Clothes name= "Jean" type = "Skinny" color="Red" size ="L">Clothes 1</Clothes>
    //   <Clothes name= "Dress" type = "Dress" color="Blue" size ="M">Clothes 2</Clothes>
    // </div>
    /* Stage Component*/
    // <div>
    //   <StageComponent/>
    // </div>

  );
}

export default App;
