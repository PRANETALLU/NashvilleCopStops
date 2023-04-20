import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardContent, MenuItem, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

function DatabaseSearch() {

    const [stopInfo, setStopInfo] = useState({
        day: "",
        month: "",
        hour: "",
        min: "",
        time: "",
        location: "",
        precinct: "",
        reportingArea: "",
        zone: "",
        officerID: "",
        reasonForStop: ""
    });
    
    const handleStopInfoChange = (event) => {
        const { name, value } = event.target;
        setStopInfo({ ...stopInfo, [name]: value });
        console.log(stopInfo);
    }

    const [subjectInfo, setSubjectInfo] = useState({
        age: "",
        race: "",
        sex: "",
    });

    const handleSubjectInfoChange = (event) => {
        const { name, value } = event.target;
        setSubjectInfo({ ...subjectInfo, [name]: value });
    }

    return (
        <div className="DatabaseSearch">
            <Box sx={{
                backgroundColor: "#D3D3D3",
                width: 1000,
                height: 480,
                marginLeft: "20%",
                marginTop: "2%"
            }}>
                <Typography gutterBottom variant="h5" component="div"
                    style={{
                        textDecoration: 'underline', fontWeight: 'bold', textAlign: 'left',
                        marginLeft: 15
                    }}>
                    Stop Information
                </Typography>
                <Stack direction="row" marginLeft={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Date
                    </Typography>
                    <TextField label="Day" name="day" size="small" variant="outlined"
                        value = {stopInfo.day}
                        onChange = {handleStopInfoChange}
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                    <Typography fontSize={15} marginLeft={1} marginTop={1}>
                        -
                    </Typography>
                    <TextField label="Month" name ="month" size="small" variant="outlined"
                        value = {stopInfo.month}
                        onChange = {handleStopInfoChange}
                        sx={{ marginLeft: 1, width: "150px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Time
                    </Typography>
                    <TextField label="Hour" name="hour"  size="small" variant="outlined"
                        value = {stopInfo.hour}
                        onChange = {handleStopInfoChange}
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                    <Typography fontSize={15} marginLeft={1} marginTop={1}>
                         -
                    </Typography>
                    <TextField label="Min" name="min"  size="small" variant="outlined"
                        value = {stopInfo.min}
                        onChange = {handleStopInfoChange}
                        sx={{ marginLeft: 1, width: "150px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Location
                    </Typography>
                    <Select size="small" name="location" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.location}
                        onChange = {handleStopInfoChange}>
                        <MenuItem value="Street">Street</MenuItem>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Precinct
                    </Typography>
                    <Select size="small" name="precinct" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.precinct}
                        onChange = {handleStopInfoChange}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Reporting Area
                    </Typography>
                    <Select size="small" name="reportingArea" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.reportingArea}
                        onChange = {handleStopInfoChange}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Zone
                    </Typography>
                    <Select size="small" name="zone" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.zone}
                        onChange = {handleStopInfoChange}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Officer ID (Hashed)
                    </Typography>
                    <Select size="small" name="officerID" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.officerID}
                        onChange = {handleStopInfoChange}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Reason For Stop
                    </Typography>
                    <Select size="small" name="reasonForStop" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {stopInfo.reasonForStop}
                        onChange = {handleStopInfoChange}>
                    </Select>
                </Stack>
            </Box>

            <Box sx={{
                backgroundColor: "#D3D3D3",
                width: 1000,
                height: 208,
                marginLeft: "20%",
                marginTop: "2%"
            }}>
                <Typography gutterBottom variant="h5" component="div"
                    style={{
                        textDecoration: 'underline', fontWeight: 'bold', textAlign: 'left',
                        marginLeft: 15
                    }}>
                    Subject Information
                </Typography>
                <Stack direction="row" marginLeft={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Age
                    </Typography>
                    <TextField label="Years" name="age" size="small" variant="outlined"
                        value = {subjectInfo.age}
                        onChange = {handleSubjectInfoChange}
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Race
                    </Typography>
                    <Select size="small" name="race" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {setSubjectInfo.race}
                        onChange={handleSubjectInfoChange}>
                        <MenuItem value="White">White</MenuItem>
                        <MenuItem value="Black">Black</MenuItem>
                        <MenuItem value="Hispanic">Hispanic</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Sex
                    </Typography>
                    <Select size="small" name="sex" sx={{ width: "150px", marginLeft: 1.5 }}
                        value = {subjectInfo.sex}
                        onChange = {handleSubjectInfoChange}>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </Stack>
            </Box>

            <Box sx={{
                backgroundColor: "#D3D3D3",
                width: 1000,
                height: 560,
                marginLeft: "20%",
                marginTop: "2%"
            }}>
                <Typography gutterBottom variant="h5" component="div"
                    style={{
                        textDecoration: 'underline', fontWeight: 'bold', textAlign: 'left',
                        marginLeft: 15
                    }}>
                    Outcome
                </Typography>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Outcome
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Contraband Found
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Drugs
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Weapons
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Frisk
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Seach Performed
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Person
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1.25}>
                        Vehicle
                    </Typography>
                    <RadioGroup
                        row
                        sx={{marginLeft:2, fontSize: 1}}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="True" />
                        <FormControlLabel value="false" control={<Radio />} label="False"/>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Basis
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
            </Box>
            <Button variant="contained" size="large" 
            sx={{marginTop: 2, marginBottom: 4,
            width: 200, height: 50, fontSize: 30}}
            >SEARCH</Button>
        </div>
    );
}

export default DatabaseSearch;