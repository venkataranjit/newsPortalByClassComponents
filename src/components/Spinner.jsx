import React, { Component } from 'react';
import spinner from '../assets/images/Spinner@1x-1.0s-200px-200px.svg';

export default class Spinner extends Component{
    render(){
        return(
            <>
                <div className='spinner'>
                    <img src={spinner} alt="spinner" />
                </div>
            </>
        )    
    }
}