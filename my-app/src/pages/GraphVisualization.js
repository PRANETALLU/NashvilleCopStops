import TextField from '@mui/material/TextField';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Graph1Nash from '../images/Graph1Nash.png'
import averageAgeTopPrecinct from '../images/graphs/average_age_top_precincts.png'
import cumulativePercentageOfOfficersVsStops from '../images/graphs/cumulative_percentage_of_officers_vs_stops_2012.png'
import maleFemaleOutcomesOfStop from '../images/graphs/male_female_outcomes_of_stops.png'
import percentageOfStopsByOutcome from '../images/graphs/percentage_of_stops_by_outcome_per_year.png'
import percentageOfStopsByRace from '../images/graphs/search_contraband_gender_comparison.png'
import seachesPer100Drivers from '../images/graphs/searches_per_100_drivers.png'
import topPrecinctsByPercentageOfStops from '../images/graphs/top_3_precincts_by_percentage_of_total_stops_per_year.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GraphVisualization() {
    return (
        <div className="GraphVisualization">
            <Stack sx={{ marginLeft: 37, marginTop: 8 }}>
                <Typography gutterBottom variant="h5" component="div"
                    style={{
                        fontWeight: 'bold', textAlign: 'left',
                    }}>
                    Location
                </Typography>
            </Stack>
            <Stack sx={{ marginLeft: 35 }} direction="row">
                <FormControl sx={{ mt: 1, ml: 1.8, width: 150 }}>
                    <InputLabel>Location 1</InputLabel>
                    <Select label="Location 1"></Select>
                </FormControl>
                <FormControl sx={{ mt: 1, ml: 1.8, width: 150 }}>
                    <InputLabel>Location 2</InputLabel>
                    <Select label="Location 2"></Select>
                </FormControl>
            </Stack>
            <Typography gutterBottom variant="h5" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'center',
                    marginTop: 50, color: '#0F52BA'
                }}>
                Understanding the Data
            </Typography>

            <Typography gutterBottom variant="h6" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'left',
                    marginTop: 50, marginLeft: 115
                }}>
                Police Stops: Frequency and Outcome
            </Typography>

            <Box sx={{ width: '100%', marginLeft: 4}}>
                <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={5}>
                        <Item>
                            Description
                            & 
                        Findings</Item>
                    </Grid>
                    <Grid item  md={5}>
                        <Item>Bar graph:
Find highest 3 precincts (by # of stops) each year and determine % of total stops that they accounted for that year</Item>
                    </Grid>
                    <Grid item  md={5}>
                        <Item>Bar graph:
Out of all stops in a year, what percentage of stops resulted in each of the three outcomes (warning, citation, arrest)? Look for differences over the years</Item>
                    </Grid>
                    <Grid item  md={5}>
                        <Item><img src={Graph1Nash} className = "graphImg"></img></Item>
                    </Grid>
                </Grid>
            </Box>


            <Typography gutterBottom variant="h6" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'left',
                    marginTop: 50, marginLeft: 290
                }}>
                Race and Discrimination
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                           1</Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>
                            Description
                            & 
                        Findings</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item> Multi line graph:
Over the time of data collection, is there a difference in the average number of stops per race made during different hours of the day?</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Multi line graph:
For each rate, what is the difference between the number of searches conducted for every 100 drivers, and how has this changed over the years?</Item>
                    </Grid>
                </Grid>
            </Box>


            <Typography gutterBottom variant="h6" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'left',
                    marginTop: 50, marginLeft: 290
                }}>
                Gender, Age, and Inequality
            </Typography>


            <Box sx={{ width: '100%', marginBottom: 4 }}>
                <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                            Description
                            & 
                        Findings</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Double line graph:
Out of all stops in a year with outcome of warning or citation, what percentage of stops, for each gender, resulted in a warning vs a citation. (x-axis: year; y-axis: % warning outcome)</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Bar graph:
For each gender, what are the percentage of searches conducted conducted result in contraband, drugs, or weapons, and how have these numbers changed over time?</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item> <img src = {averageAgeTopPrecinct} className = "graphImg"></img></Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default GraphVisualization;