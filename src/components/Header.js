import React,{PureComponent} from 'react';

class header extends PureComponent { 
    /*shouldComponentUpdate(nextProps, nextState){
        return false;
    }*/
    render() {
        console.log('header')
        return <div>
            <h1 className='yellow'>Robo Friends</h1>
        </div>
    };
};
export default header; 