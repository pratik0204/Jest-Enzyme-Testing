import React,{Component} from 'react';
import Header from './component/header/index'
import './App.scss';
import Headline from './component/headline/index'
import SharedButton from './component/button/index'
import ListItem from './component/listItem/index'
import {connect} from 'react-redux';
import {fetchPosts} from './store/actions/index'
import { findAllByTitle } from '@testing-library/react';
import ListtItem from './component/listItem/index';

const tempArr =[{
  fName:'Joe',
  lName:'Bloggs',
  email:'user@gmail.com',
  age:24,
  onlineStatus:true
}]

class App extends Component{

  constructor(props){
    super(props);
    this.fetch=this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
  }

  render(){

    const {posts} = this.props;
 

    const configButton={
      buttonText:'Get posts',
      emitEvent:this.fetch
    }

    return(
      <div className="App">
      <Header/>
      <Headline tempArr={tempArr} header={"Header"} desc="Click the button to render"/>
      <SharedButton {...configButton} />
      {posts && 
        <div>
          {posts.map((post,index)=>{
            const {title,body} = post;
            const configListItem = {
              title,
              desc:body
            };
            return(
              <ListtItem key={index} {...configListItem} />
            )
          })}
        </div>
      }
    </div>
    )
  }
}
const mapStateToProps = state =>{
  console.log(state)
  return {
    posts:state.post
  }
}

export default connect(mapStateToProps,{fetchPosts})(App);