import React from 'react';

import {LaunchesQuery} from '../../generated/graphql';

interface Props {
    data?: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) =>(
        <div>
            <h3>All SpaceX Launches</h3>
            <ol>
                { JSON.stringify(data)
                    
                }
                {/* {!!data.launches && data.launches.map(
                    (launch,ind)=> !!launch && (
                    <li key={ind}>
                       {launch.mission_name} -{launch.launch_year}
                    </li>
                )
                )} */}
            </ol>
        </div>

)
export default Launch;