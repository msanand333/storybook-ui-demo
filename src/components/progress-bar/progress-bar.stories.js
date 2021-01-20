import React from 'react';
import {ProgressBar} from './index.js';

export default{
    title:'Progress Bar',
    component:ProgressBar

}

export const Progress = ()=>{
    return(
        <ProgressBar done='80'> </ProgressBar>
    )
    
}

