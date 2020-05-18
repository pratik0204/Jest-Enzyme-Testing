import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ListtItem extends Component {
    render() {

        const{title,desc}=this.props

        if(!title){
            return null;
        }

        return (
            <div data-test="ListItemComponent">
                <h2 data-test="ComponentTitle">{title}</h2>
                <div data-test="ComponentDesc">
                    {desc}
                </div>
            </div>
        )
    }
}

ListtItem.propTypes = {
    title:PropTypes.string,
    desc:PropTypes.string
}