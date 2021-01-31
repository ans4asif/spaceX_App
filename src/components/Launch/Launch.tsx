import React from 'react';
import './../Launch/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { LaunchesQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

// export interface OwnProps{
//     handleIdChange:(newId:number|null|undefined)=>void
//   }
interface Props {
    data: LaunchesQuery | undefined;
}

const Launch: React.FC<Props> = ({ data }) => {
    const classes = useStyles();
    console.log(data);


    if (data) {
        return (
            <div className="list_wrapper">
                <h3 className="font">All SpaceX Launches</h3>
                <Grid container spacing={3}>
                    {!!data.launches && data.launches.map(
                        (launch, ind) => !!launch && (
                            <Grid item xs={12} sm={4} key={ind}>
                                <Paper className={classes.paper}>
                                    <h3 className='name'>{launch.mission_name}</h3>
                                    <p className='year'>Launch Year-{launch.launch_year}</p>
                                    <p className={launch.launch_success ? "green" : "red"}>
                                        <strong>{launch.launch_success ? "Success" : "Failed"}</strong></p>
                                    <Link to={`/${launch.flight_number}`}>
                                        <button className='btn'>Details</button>
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                    )}
                    {/* <ul className="list">
                {!!data.launches && data.launches.map(
                  (launch, ind) => !!launch && (
                    <li className='list_items' key={ind} onClick={() => handleIdChange(launch.flight_number)}>
                     <a href='#'> {launch.mission_name} -{launch.launch_year} ({JSON.stringify(launch.launch_success)})</a>
                    </li>
                        )
                    )}
                </ul> */}
                </Grid>

            </div>
        )
    }
    return ( <div>
        <CircularProgress color="secondary" className="progress"/>
           </div>
    )
}
export default Launch;