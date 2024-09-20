import logo from './logo.svg';
import './App.css';

import Ammu from './chenda/ammu';
import Counter from'./counter/counter';
import ParentComponent from './counter/parentComponent';
import LifeCycleDemo from'./lifeCycle/lifeCycle';
import AnimationExample from './animationExample/animationExample';
import TodoList from './todolist/todo';
import ContextDemo from './contextDemo/contextDemo';
import StyledComponent from './styleComponent/styleComponent';
import ThemeApp from './themeExample/themeExample';

function App() {
  return (
    <div style={{color:'black',background:'rgb(144, 146, 236)  ',textAlign:'center'}}>
      
      <div class="navbar">
        <a class="active" href="#">Home</a> 
        <a href="#">Search</a> 
        <a href="#">Contact</a> 
        <a href="#">Login</a>
      </div>
      
       <div>
         <br/>
          <Ammu/>
          <Counter/>
          <ParentComponent/>
          <LifeCycleDemo/>
          <AnimationExample/>
          <TodoList/>
          <ContextDemo/>
          <StyledComponent/>
          <ThemeApp/>
        </div>
        </div>
   
  );
}

export default App;
