import React from 'react'
import {useLaunchInfoQuery} from '../../generated/graphql';
import LaunchDetails from './LaunchDetails'

const LaunchDetailsContainer = () =>{
    const { data, loading, error } = useLaunchInfoQuery({
        variables: {id: "13"},
      });
    if (loading){
        <h3>Data is loading</h3>
    }

    if(error||!data){
        <h3>There is an error</h3>
    }
    
    return <LaunchDetails data={data}/>
    
}
export default LaunchDetailsContainer;