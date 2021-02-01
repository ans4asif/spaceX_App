import { CircularProgress } from '@material-ui/core';
import React from 'react'
import {LaunchInfoQuery} from '../../generated/graphql';
import './style.css'


interface props {
    data:LaunchInfoQuery | undefined
}
const LaunchDetails: React.FC <props> = ({data})=>{

if(!data){
  return(
    <div>
    <CircularProgress color="secondary" className="progress"/>
       </div>
  )
}
   return(
    <div className="launch-details">
      <div className="detils-body">
      <h1>{data?.launch?.mission_name}
          {data?.launch?.rocket && `(${data.launch.rocket.rocket_name})| ${data.launch.rocket.rocket_type}`}
      </h1>
      <div>
        <span>Flight {data?.launch?.flight_number}: </span>
        {data?.launch?.launch_success?(
          <span>Successful</span>):(
            <span>Failed</span>
          )
        }
      </div>
      <p>{data?.launch?.details}</p>
      {data?.launch?.links && data.launch.links.flickr_images &&(
        
        <div className="images_list">{data?.launch.links.flickr_images.map(images=>images?
          <img className="images" src={images} key={images} alt='rocket launch images'/> : <p>No Images!</p>
        )}</div>
        
      )}
    </div>
    </div>
   )
}
export default LaunchDetails;