import React from 'react';
import {useLaunchesQuery} from '../../generated/graphql';
import  Launch from './Launch';
// import {OwnProps} from './Launch'

const LaunchContainer=() => {
   
    const {data,error,loading} = useLaunchesQuery();
    
    if (loading){
        <h3>Data is loading</h3>
    }

    if(error || !data){
        <h3>There is an error</h3>
    }

    return <Launch data = {data}/>
};

export default LaunchContainer;
