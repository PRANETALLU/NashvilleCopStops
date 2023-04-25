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
import averageAgeTopPrecinct from '../images/graphs/average_age_top_precincts.png'
import cumulativePercentageOfOfficersVsStops from '../images/graphs/cumulative_percentage_of_officers_vs_stops_2012.png'
import maleFemaleOutcomesOfStop from '../images/graphs/male_female_outcomes_of_stops.png'
import percentageOfStopsByOutcome from '../images/graphs/percentage_of_stops_by_outcome_per_year.png'
import searchContrabandGenderComparison from '../images/graphs/search_contraband_gender_comparison.png'
import searchesPer100Drivers from '../images/graphs/searches_per_100_drivers.png'
import stopsByTimeAndRace from '../images/graphs/stop_frequency_by_time_and_race.png'
import percentageOfStopsByRacePerYear from '../images/graphs/percentage_of_stops_by_race_per_year.png'
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
            <Typography gutterBottom variant="h5" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'center',
                    marginTop: 50, marginBottom: 80, color: '#0F52BA'
                }}>
                Understanding the Data
            </Typography>

           

            <Box sx={{ width: '100%', mx: 3, marginBottom: 20 }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h6" component="div"
                            style={{
                                fontWeight: 'bold', textAlign: 'center',
                                marginTop: 20, fontSize: 22
                            }}>
                            Police Stops: Frequency and Outcome
                        </Typography>
                        <Typography >
                            <br></br>
                            We start by using complex queries to analyze the data pertaining to our data's observed
                            officers, precincts, and overall stop makeup. The top right graph helps our readers
                            to identify an interesting trend: certain precincts consistently account for a large volume
                            of Nashville's crime. Precincts 3 and 5 consistently appear in the top 3 precincts for total
                            stops per year. This is interesting because precinct 3 is located in the heart of downtown
                            Nashville, and precinct 5 is located in the heart of East Nashville. These precincts are
                            located in the heart of Nashville's nightlife, and it is interesting to see that they
                            consistently account for a large volume of Nashville's crime.
                            <br></br>
                            The bottom left graph shows the percentage of stops by outcome per year. This graph is interesting because it
                            shows that the percentage of stops that resulting in a citation has been steadily climbing in the 
                            last few recorded years, with less warnings being given out per stop. 
                            <br></br>
                            The bottom right graph shows the cumulative percentage of officers vs stops. What is notable here is that the top 10% of 
                            officers (in terms of number of stops in the year 2012) accounted for nearly 50% of the total stops
                            in Nashville. Clearly, this shows that a small percentage of Nashville's police force are responsible
                            for the majority of community interactions in this context.


                         </Typography>
                    </Grid>
                    <Grid item  md={6}>
                        <Item><img src = {topPrecinctsByPercentageOfStops} className = "" ></img></Item>
                    </Grid>
                    <Grid item  md={6}>
                        <Item><img src={percentageOfStopsByOutcome} className =""></img></Item>
                    </Grid>
                    <Grid item  md={6}>
                        <Item><img src={cumulativePercentageOfOfficersVsStops} className = ""></img></Item>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ width: '100%', mx: 3, marginBottom: 20 }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h6" component="div"
                            style={{
                                fontWeight: 'bold', textAlign: 'center',
                                marginTop: 20, fontSize: 22
                            }}>
                            Race and Discrimination
                        </Typography>
                        <Typography >
                            <br></br>
                            Now, we turn our attention to a popular point of focus: the relationship between the police
                            and different racial group. We begin by looking at the graph in the top left which reveals a
                            startling statistics: Black and Hispanic drivers are 100% more likely to be searched than white
                            or Asian drivers. This is a shocking statistic, and it is important to note that this statistic
                            is not necessarily indicative of racial bias. However, it does highlight a disparity in the
                            treatment of different racial groups by the police which warrants further investigation.
                            <br></br>
                            Next, we allow our eyes to focus on the bottom right graph which displays the percentage of 
                            stops by race over the years. On the surface, it is clear that the percentage of stops of white
                            drivers far surpasses that of other races. However, when we explore U.S. Census data to understand 
                            the demographic makeup of Nashville, we see something interesting. Nashville's population is 53.3% White,
                            24.3% Black, 14.0% Hispanic, and 3.9% Asian. This clearly paints a different picture and highlights
                            concerns from the above paragraph.
                            <br></br>
                            Finally, a look at the bottom left graph reveals that the majority of stops occur midday, after work,
                            and close to midnight. This seems reasonable, as these are the times when people are most likely to
                            be driving. However, it is interesting to note that the percentage of stops of Black drivers is
                            disproportionately high during the late night hours. This is a trend that is worth exploring further.
                         </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src = {searchesPer100Drivers} className = "graphImg" ></img></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src = {stopsByTimeAndRace} className="graphImg"></img></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item> <img src = {percentageOfStopsByRacePerYear} className = "graphImg"></img></Item>
                    </Grid>
                </Grid>
            </Box>

            
            <Box sx={{ width: '100%', mx: 3, marginBottom: 20 }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h6" component="div"
                            style={{
                                fontWeight: 'bold', textAlign: 'center',
                                marginTop: 20, fontSize: 22
                            }}>
                            Gender, Age, and Inequality
                        </Typography>
                        <Typography >
                            <br></br>
                            We end by analyzing the relationship between police stops, gender, and age.
                            First, let us explore how gender affects the outcome of a police stop. The top right graph
                            shows that, over all of the years of data collection, women are consistently more likely
                            to receive a warning than their male counterparts. Furthermore, men are signficantly more
                            likely to be involved in an arrest during their stop with a poice officer than their female 
                            peers. However, observing this without context is not enough to draw conclusions about the
                            nature of police stops in Nashville.
                            <br></br>
                            To provide us with a more complete picture, we look to the bottom left graph. This graph
                            analyzes the nature of police search outcomes in the context of gender. As the graph shows,
                            men are significantly more likely to have contraband of any kind, including drugs and weapons.
                            Luckily for the safety of Nashville civilians, and likely to the relief of Nashville police,
                            less searches are resulting in weapons found over the years.
                            <br></br>
                            We conclude by observing how age plays into police stops. As the reader can see, the majority
                            of drivers stopped are between the ages of 36 and 38. Furthermore, the average age of drivers
                            stopped has been increasing in some precincts while decreasing in others, likely due to a difference
                            in what is offered in the area. 
                         </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src = {maleFemaleOutcomesOfStop} className = "graphImg" ></img></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src = {searchContrabandGenderComparison} className="graphImg"></img></Item>
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