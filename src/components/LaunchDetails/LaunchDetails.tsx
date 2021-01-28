import React from 'react'
import {LaunchInfoQuery} from '../../generated/graphql';

interface props {
    data:LaunchInfoQuery
}
const LaunchDetails: React.FC <props> = ({data})=>{
   return(
    <div>
  <h3>Launches Details</h3>
    <p>{data}</p>
    </div>
   )
}
export default LaunchDetails;