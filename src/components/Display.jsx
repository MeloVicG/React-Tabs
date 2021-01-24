import React from 'react';

//being called from Tabs <Display/>
// this can be set to (props) but have to call by props.something
const Display = ({tabs, selected}) => {
    // const{tabs, selected} = props; //another way of calling
    

    return (
        <div>
            hello i am the Display!
            <br/> 
            {tabs[selected].content}
        
            {/* <Tabs/> */}
        </div>
    )
}

export default Display
