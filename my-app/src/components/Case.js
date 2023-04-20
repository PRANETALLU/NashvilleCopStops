import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Case = () => {
    return (
        <div className="Case">
            <Box sx={{
                width: 800,
                height: 800,
                backgroundColor: 'gray',
                marginLeft: 40,
                marginBottom: 5
            }}
            >
                <Stack direction="row">
                    <Typography gutterBottom variant="body1" component="div"
                        style={{
                            fontWeight: 'bold', textAlign: 'left',
                            marginTop: 10, marginLeft: 10,
                            fontSize: 22
                        }}>
                        Case #:
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div"
                        style={{
                            fontWeight: 'bold', textAlign: 'left',
                            marginTop: 10, marginLeft: 5,
                            fontSize: 22
                        }}>
                        4324234
                    </Typography>
                </Stack>

                <Stack direction="row">
                    <Stack direction="column">
                        <Typography gutterBottom variant="body1" component="div"
                            style={{
                                fontWeight: 'bold', textAlign: 'left',
                                marginTop: 10, marginLeft: 60,
                                fontSize: 22, textDecoration: 'underline'
                            }}>
                            Subject
                        </Typography>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 40,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Name:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Pranet
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 40,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Age:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                13
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 40,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Race:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                White
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 40,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Sex:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    textAlign: 'left',
                                    fontSize: 18
                                }}>
                                Male
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="column">
                        <Typography gutterBottom variant="body1" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10, marginLeft: 300,
                                fontSize: 22, textDecoration: 'underline'
                            }}>
                            Setting
                        </Typography>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 300,
                                    fontSize: 18
                                }}>
                                Address:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    fontSize: 18
                                }}>
                                280 Fletcher Drive
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 300,
                                    fontSize: 18
                                }}>
                                Precinct:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    fontSize: 18
                                }}>
                                PUGH
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 300,
                                    fontSize: 18
                                }}>
                                Reporting Area:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    fontSize: 18
                                }}>
                                170
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 300,
                                    fontSize: 18
                                }}>
                                Zone:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 20,
                                    fontSize: 18
                                }}>
                                170
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="column" justifyContent="center">
                    <Typography gutterBottom variant="body1" component="div"
                        style={{
                            fontWeight: 'bold',
                            marginTop: 40,
                            fontSize: 22, textDecoration: 'underline'
                        }}>
                        Officer
                    </Typography>
                    <Stack direction="row" justifyContent="center">
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                fontSize: 18
                            }}>
                            ID:
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10, marginLeft: 10,
                                fontSize: 18
                            }}>
                            170
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center">
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                fontSize: 18
                            }}>
                            Name:
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10, marginLeft: 10,
                                fontSize: 18
                            }}>
                            Dr. Markus Schneider
                        </Typography>
                    </Stack>
                </Stack>
                <Typography gutterBottom variant="body1" component="div"
                    style={{
                        fontWeight: 'bold',
                        marginTop: 40,
                        fontSize: 22, textDecoration: 'underline'
                    }}>
                    Stop
                </Typography>
                <Stack direction="column" justifyContent="center">
                    <Stack direction="row" justifyContent="center">
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                fontSize: 18
                            }}>
                            Reason:
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10, marginLeft: 10,
                                fontSize: 18
                            }}>
                            Late to class
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center">
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                fontSize: 18
                            }}>
                            Outcome:
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div"
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10, marginLeft: 10,
                                fontSize: 18
                            }}>
                            Arrest
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <Stack direction="column">
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 30,
                                    textAlign: 'left',
                                    fontSize: 18,
                                }}>
                                Search:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 30,
                                    textAlign: 'left',
                                    fontSize: 18,
                                }}>
                                Person:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 30,
                                    textAlign: 'left',
                                    fontSize: 18,
                                }}>
                                Vehicle:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="column">
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 150,
                                    fontSize: 18,
                                }}>
                                Contraband:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                    marginLeft: 150,
                                    fontSize: 18,
                                }}>
                                Drugs:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                    marginLeft: 150,
                                    fontSize: 18,
                                }}>
                                Weapons:
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div"
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 10, marginLeft: 10,
                                    fontSize: 18
                                }}>
                                False
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <Typography gutterBottom variant="body2" component="div"
                        style={{
                            fontWeight: 'bold',
                            marginTop: 10,
                            fontSize: 18,
                        }}>
                        Basis:
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div"
                        style={{
                            fontWeight: 'bold',
                            marginTop: 10, marginLeft: 10,
                            fontSize: 18
                        }}>
                        NA
                    </Typography>
                </Stack>
            </Box>
        </div>
    );
}


export default Case; 