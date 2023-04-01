import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function GraphVisualization() {
    return (
        <div className="GraphVisualization">
            <Stack sx={{ marginLeft: 35, marginTop: 8 }}>
                <Typography gutterBottom variant="h5" component="div"
                    style={{
                        fontWeight: 'bold', textAlign: 'left',
                        marginLeft: 15
                    }}>
                    Location
                </Typography>
                <Stack direction="row">
                    <InputLabel htmlFor="grouped-native-select">Location 1</InputLabel>
                    <Select sx={{ width: 170, marginLeft: 1.8 }} id="grouped-native-select" label="Location 1"  size="small"></Select>
                </Stack>
            </Stack>
        </div>
    );
}

export default GraphVisualization;