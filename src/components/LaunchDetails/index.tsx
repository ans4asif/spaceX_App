import React from 'react'
import { useParams } from 'react-router-dom';
import {useLaunchInfoQuery} from '../../generated/graphql';
import LaunchDetails from './LaunchDetails'

// interface OwnProps{
//     id:number
// }

const LaunchDetailsContainer = () =>{
    let {id}= useParams();

    const { data, loading, error } = useLaunchInfoQuery({
        variables: {id: String(id)},
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