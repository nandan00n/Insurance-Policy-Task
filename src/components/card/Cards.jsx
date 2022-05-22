import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Editing from '../modal/Editing';

export default function BasicCard({data}) {

    console.log(data, "asdfghjkl")
    // const data=ddata;

    // console.log(data.Policy_id);

    return (
        <>
            <Grid className='cards' col={4} sx={{ margin: '2vh', display: 'flex' }}>
                <Grid sx={{ display: "flex" }}>
                    <Card className='resp' sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className='details' style={{ margin: 15 }}>

                                <Typography sx={{ backgroundColor: "white", fontSize: 20, fontWeight:'600', display: 'flex', justifyContent: 'center', borderRadius: '8px' }} variant="h6" component="div">
                                    Policy-ID : {data.Policy_id}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    Customer-ID : {data.Customer_id}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    DOP : {data.Date_of_Purchase}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    VEHICLE_SEGMENT : {data.VEHICLE_SEGMENT}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    Premium : {data.Premium}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    Customer_Gender : {data.Customer_Gender}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    Customer_Income : {data.Customer_Income}
                                </Typography>
                                <Typography variant="h6" sx={{ display: 'flex', fontSize:14, justifyContent: 'center', marginTop: "2vh" }}>
                                    Customer_Region : {data.Customer_Region}
                                </Typography>

                            </div>
                        </CardContent>
                        <CardActions>
                            <Editing data={data} />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
}
