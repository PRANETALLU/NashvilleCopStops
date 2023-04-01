import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function DatabaseSearch() {
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
                    <TextField label="Day" size="small" variant="outlined"
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                    <Typography fontSize={15} marginLeft={1} marginTop={1}>
                        -
                    </Typography>
                    <TextField label="Month" size="small" variant="outlined"
                        sx={{ marginLeft: 1, width: "150px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Time
                    </Typography>
                    <TextField label="Hour" size="small" variant="outlined"
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                    <Typography fontSize={15} marginLeft={1} marginTop={1}>
                        -
                    </Typography>
                    <TextField label="Min" size="small" variant="outlined"
                        sx={{ marginLeft: 1, width: "150px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Location
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Precinct
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Reporting Area
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Zone
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Officer ID (Hashed)
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Reason For Stop
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
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
                    <TextField label="Years" size="small" variant="outlined"
                        sx={{ marginLeft: 1.5, width: "90px" }} />
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Race
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
                    </Select>
                </Stack>
                <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Sex
                    </Typography>
                    <Select size="small" sx={{ width: "150px", marginLeft: 1.5 }}>
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