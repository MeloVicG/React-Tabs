import React, { useState } from 'react';
import Display from './Display';




//            this was set to props, than changed to grab from parent
const Tabs = ({tabs, tabHandler, selected}) => {
    //This was placed before adding it to the Parent compontent ~~Apps.js~~
    // const [tabs,setTabs] = useState([
    //     {title: "Tab 1", content: "This is Tab 1"},
    //     {title: "Tab 2", content: "This is Tab 2"},
    //     {title: "Tab 3", content: "This is Tab 3"},
    //     {title: "Tab 4", content: "This is Tab 4"},
    // ]);

    // const[selected, setSelected] = useState(0);

    // const tabHandler = (idx) => {
    //     setSelected(idx);
    // }

    return (
        <div>
            {
                tabs.map((val, idx) => <button key={idx} onClick={e => tabHandler(idx)}>{val.title} <br/> idx is {idx}</button>)
            }
            <Display tabs={tabs} selected={selected} />
                        {/* these are props */}
            
        </div>
    )


}

export default Tabs
