import logo from './logo.svg';
import './App.css';
import Welcome from './components/test';
import Clothes from './Clothes';
import StageComponent from './components/stages';
import ForceUpdate from './forceUpdate.tsx';
import DomNode from './domNode.tsx';
import ComponentLifeCycle from './componentLifeCycle';
import HandleEvent from './components/handleEvent/handleEvents';
import FormSubmit from './components/formSubmit/formSubmit';
import RenderWithCondition from './components/renderWithCondition/renderCondition';
import ListAndKeyReact from './components/listAndKey/listAndKeyReact';
import Caculator from './components/liftingStateUp/caculator';
import ReactReft from './components/reactRefs/reactReft';
import ContextReactjs from './components/contextReactjs/contextReactjs';
import ContextApi from './components/contextReactjs/contextApi/contextApi';
import FragmentReact from './components/fragmentsReact/fragmentReact';
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
      {/* <HandleEvent/> */}
      {/* <FormSubmit/> */}
      {/* <RenderWithCondition/> */}
      {/* <ListAndKeyReact/> */}
      {/* <Caculator/> */}
      {/* <ReactReft/> */}
      {/* <ContextReactjs/> */}
      {/* <ContextApi/> */}
      <FragmentReact/>
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
