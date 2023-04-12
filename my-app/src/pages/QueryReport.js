import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function QueryReport() {
    return (
        <div className="QueryReport">
            <Typography gutterBottom variant="h5" component="div"
                style={{
                    fontWeight: 'bold', textAlign: 'left',
                    marginLeft: 60, marginTop: 30
                }}>
                Query Overview:
            </Typography>
            <Stack direction="row" justifyContent="center">
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    Total Stops
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    Warnings
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    Citations
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }}>
                    Arrests
                </Typography>
            </Stack>

            <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', textAlign: 'center',
                        marginTop: 80
                    }}>
                    Driver Statistics
            </Typography>

            <Stack direction="row" justifyContent="center">
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    White
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    Black
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 150,
                        textDecoration: 'underline'
                    }}>
                    Hispanic
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }}>
                    Other
                </Typography>
            </Stack>

            <Stack direction="row" justifyContent="center" marginTop={12}>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', marginRight: 450,
                        textDecoration: 'underline'
                    }}>
                    Male
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                    style={{
                        fontWeight: 'bold', 
                        textDecoration: 'underline'
                    }}>
                    Female
                </Typography>
            </Stack>
        </div>
    );
}

export default QueryReport;