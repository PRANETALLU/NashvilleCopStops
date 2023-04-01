import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function DatabaseSearch() {
    return (
        <div className="DatabaseSearch">
            <Box sx={{
                backgroundColor: "#D3D3D3",
                width: 1000,
                height: 300,
                marginLeft: "20%",
                marginTop: "2%"
            }}>
                <Typography gutterBottom variant="h6" component="div"
                    style={{ textDecoration: 'underline', fontWeight: 'bold', textAlign: 'left', marginLeft: 15 }}>
                    Stop Information
                </Typography>
                <Stack direction="row">
                    <Typography fontSize={15} marginTop={2}>
                        Date
                    </Typography>
                    <TextField label="Day" variant="outlined" sx={{ marginLeft: "-70%" }} />
                </Stack>
            </Box>
        </div>
    );
}

export default DatabaseSearch;