import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import GraphV from '../images/graphV.png';
import GeoV from '../images/geoV.png';
import SearchV from '../images/searchV.png';
import Box from '@mui/material/Box';
import { CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="Main">
           <p id="description">An informational database meant to help you understand the relationship between police and
                <br />the community of Nashville, Tennessee.</p> 
            <Stack direction="row" justifyContent={'center'} marginTop={6}>
                <Link to ="/graphVisualization">
                <Card sx={{ backgroundColor: "white", width: 300, height: 400, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)'}}>
                    <Box mt={(8)}>
                        <img src={GraphV} id="imgGraphV"></img>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                            Graph Visualization
                        </Typography>
                        <Typography fontSize={15} marginTop={2}>
                            Compare stop information across different locations and explore pre-computed complex queries performed  across a range of factors.
                        </Typography>
                    </CardContent>
                </Card>
                </Link>

                <Link to ="/geoVisualization">
                <Card sx={{ backgroundColor: "white", width: 300, height: 400, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', ml: 8, mr: 8 }}>
                    <Box mt={(8)}>
                        <img src={GeoV} id="imgGraphV"></img>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                            Geo Visualization
                        </Typography>
                        <Typography fontSize={15} marginTop={2}>
                            Understand the distribution of police stops across Nashville, allowing you to find geographical trends and hot spots.
                        </Typography>
                    </CardContent>
                </Card>
                </Link>

                <Link to ="/databaseSearch">
                <Card sx={{ backgroundColor: "white", width: 300, height: 400, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)'}}>
                    <Box mt={(8)}>
                        <img src={SearchV} id="imgGraphV"></img>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                            Database Search
                        </Typography>
                        <Typography fontSize={15} marginTop={2}>
                            Perform simple and complex queries on the whole dataset and return police stops that match your search criteria.
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
            </Stack>
        </div>
    );
}

export default Main; 