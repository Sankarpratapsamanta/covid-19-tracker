import React from 'react';
import './boxes.styles.css'
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';

const Boxes=({data})=>{
    console.log(data)

    if(!data){
        return 'Loading...'
    }

    return(
        <div className='boxes'>
            <Grid container spacing={4} justify='center'>
                <Grid item component={Card} md={3} className='grid-items'>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>CONFIRMED</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={data[0].confirmed}
                            duration={2}
                            separator=','
                        />
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card}  md={3} className='grid-items-1'>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>ACTIVE</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={data[0].active}
                            duration={2}
                            separator=','
                        />
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card}  md={3} className='grid-items-2'>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={data[0].recovered}
                            duration={2}
                            separator=','
                        />
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card}  md={3} className='grid-items-3'>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>DECEASED</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={data[0].deaths}
                            duration={2}
                            separator=','
                        />
                    </Typography>
                </CardContent>
                </Grid>
          </Grid>
        </div>
       
    )
}

export default Boxes