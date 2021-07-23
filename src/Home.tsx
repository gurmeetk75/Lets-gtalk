import React from 'react';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';

class Home extends React.Component{

    render(){
        return(
            <div>
                <Top/>
                <Middle/>
                <Bottom/>
            </div>
        )
    }
}

export default Home;