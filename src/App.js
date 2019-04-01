import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import 'tachyons';
import {setSearchField, requestRobots} from './actions';
import {connect} from 'react-redux';

//subscribe to redux state updates
//every time your state is changed 
//mapStateToProps will be called with your new state 
//and subsequently as your props update 
//component will run render function 
//to render your component in browser
const mapStateToProps = state=>{
  //console.log(state)
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    err: state.requestRobots.err
  };
}

//dispatch an action to the store
const mapDispatchToProps = dispatch=>{
  return {
    OnSearchChange: (event)=>{
      dispatch(setSearchField(event.target.value))
    },
    OnRequestRobots: ()=>dispatch(requestRobots())
  };
}

class App extends Component {
  componentDidMount(){
    //console.log(this.props)
    this.props.OnRequestRobots()
  }
  
  render() {
    const filteredBots = this.props.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={this.props.OnSearchChange}/>
        {(!this.props.isPending)
        ?<Scroll>
          <ErrorBoundary>
            <CardList robots={filteredBots}/>
          </ErrorBoundary>
        </Scroll>
        :<p>loading</p>
        }
      </div>
    );
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
 