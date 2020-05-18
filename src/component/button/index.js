 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 
 export default class SharedButon extends Component {
    
    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }
    
    render() {

        const {buttonText}=this.props;

         return (
             <button onClick={()=> this.submitEvent()} data-test="buttonComponent" >
                 {buttonText}
             </button>
         )
     }
 }
 
 SharedButon.propTypes={
     buttonText:PropTypes.string,
     emitEvent: PropTypes.func
 }