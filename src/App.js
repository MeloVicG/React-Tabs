import Tabs from './components/Tabs'
import React, {useState} from 'react';
// import Display from './components/Display'
import './App.css';

function App() {

  const [tabs,setTabs] = useState([
    {title: "Tab 1", content: "This is Tab 1"},
    {title: "Tab 2", content: "This is Tab 2"},
    {title: "Tab 3", content: "This is Tab 3"},
    {title: "Tab 4", content: "This is Tab 4"},
  ]);
  
  const[selected, setSelected] = useState(0);

  const tabHandler = (idx) => {
      setSelected(idx);
  }

  return (
    <div className="App">
      <h2>Hello im the App</h2>

      <Tabs tabs={tabs} tabHandler={tabHandler} selected={selected}/>
          {/*this sends down to the child components ~~<Tab/>~~  */}
 
      {/* <Display/> */}
    </div>
  );
}

export default App;
