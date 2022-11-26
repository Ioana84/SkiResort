import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { ReactElement } from 'react';
import Domain from '../types/domain';

interface DomainProps {
    data: Domain;
}

export default function DomainElement(props: DomainProps): ReactElement {
    const {data} = props;
    return (

    <Card sx={{ minWidth: 450, maxWidth: 450, margin: '20px' }}>
        <CardActionArea>
            <CardMedia
            sx={{
                maxWidth: 400,
                margin: "0 auto",
                marginTop: "20px"
            }}
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1546557036-57b741df8f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl6emFyZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.domainName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.domainDescription}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
  }

