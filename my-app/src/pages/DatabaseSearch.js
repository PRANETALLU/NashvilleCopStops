import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CardContent, MenuItem, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DatabaseSearch() {
  const navigate = useNavigate();
  const [stopInfo, setStopInfo] = useState({
    date: null,
    time: null,
    address: null, // done
    precinctId: null, // done
    reportingArea: null, // done
    zoneCode: null, // done
    officerId: null, // done
  });

  const handleStopInfoChange = (event) => {
    const { name, value } = event.target;
    setStopInfo({ ...stopInfo, [name]: value });
    console.log(stopInfo);
  };

  const [subjectInfo, setSubjectInfo] = useState({
    age: null, // done
    race: null, // done
    sex: null, // done
  });

  const handleSubjectInfoChange = (event) => {
    const { name, value } = event.target;
    setSubjectInfo({ ...subjectInfo, [name]: value });
    console.log(subjectInfo);
  };

  //function to post subjectInfo and stopInfo to backend
  const handleSearch = async () => {
    if (stopInfo.time == "") {
      stopInfo.time = null;
    }
    if (stopInfo.date == "") {
      stopInfo.date = null;
    }
    if (stopInfo.address == "") {
      stopInfo.address = null;
    }
    if (stopInfo.officerId == "") {
      stopInfo.officerId = null;
    }
    if (stopInfo.precinctId == "") {
      stopInfo.precinctId = null;
    }
    if (stopInfo.reportingArea == "") {
      stopInfo.reportingArea = null;
    }
    if (stopInfo.zoneCode == "") {
      stopInfo.zoneCode = null;
    }
    if (subjectInfo.age == "") {
      subjectInfo.age = null;
    }
    if (subjectInfo.race == "") {
      subjectInfo.race = null;
    }
    if (subjectInfo.sex == "") {
      subjectInfo.sex = null;
    }
    var time = stopInfo.time;
    var date = stopInfo.date;
    var address = stopInfo.address;
    var officerId = stopInfo.officerId;
    var precinctId = stopInfo.precinctId;
    var reportingArea = stopInfo.reportingArea;
    var zoneCode = stopInfo.zoneCode;

    var age = subjectInfo.age;
    var race = subjectInfo.race;
    var sex = subjectInfo.sex;

    const response = await fetch(
      "http://localhost:8080/api/v1/SearchCriteria/find",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          policeOfficer: {
            officerId,
            precinctId,
            reportingArea,
            zoneCode,
          },
          subject: {
            race,
            age,
            sex,
          },
          setting: {
            stopDate: date,
            stopTime: time,
            address,
          },
        }),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      navigate("/queryReport");
    } else {
      console.log("This is not working");
      console.log(response.status);
    }
  };

  const handleCount = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/Subjects/totalTuples",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log("number" + data);
  };

  return (
    <div className="DatabaseSearch">
      <Button
        variant="contained"
        size="large"
        onClick={handleCount}
        sx={{
          marginTop: 2,
          marginBottom: 4,
          width: 200,
          height: 50,
          fontSize: 30,
        }}
      >
        SEARCH
      </Button>
      <Box
        sx={{
          backgroundColor: "#D3D3D3",
          width: 1000,
          height: 480,
          marginLeft: "20%",
          marginTop: "2%",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 15,
          }}
        >
          Stop Information
        </Typography>
        <Stack direction="row" marginLeft={2}>
          <Typography fontSize={15} marginTop={1}>
            Date
          </Typography>
          <TextField
            label="mm-dd-yyyy"
            name="date"
            size="small"
            variant="outlined"
            value={stopInfo.date}
            onChange={handleStopInfoChange}
            sx={{ marginLeft: 1.5, width: "150px" }}
          />
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Time
          </Typography>
          <TextField
            label="hh:mm:ss"
            name="time"
            size="small"
            variant="outlined"
            value={stopInfo.time}
            onChange={handleStopInfoChange}
            sx={{ marginLeft: 1.5, width: "150px" }}
          />
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Location
          </Typography>
          <TextField
            size="small"
            name="address"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={stopInfo.address}
            onChange={handleStopInfoChange}
          ></TextField>
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Precinct
          </Typography>
          <Select
            size="small"
            name="precinctId"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={stopInfo.precinctId}
            onChange={handleStopInfoChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
          </Select>
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Reporting Area
          </Typography>
          <TextField
            size="small"
            name="reportingArea"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={stopInfo.reportingArea}
            onChange={handleStopInfoChange}
          ></TextField>
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Zone
          </Typography>
          <TextField
            size="small"
            name="zoneCode"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={stopInfo.zoneCode}
            onChange={handleStopInfoChange}
          ></TextField>
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Officer ID (Hashed)
          </Typography>
          <TextField
            size="small"
            name="officerId"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={stopInfo.officerId}
            onChange={handleStopInfoChange}
          ></TextField>
        </Stack>
        {/* <Stack direction="row" marginLeft={2} marginTop={2}>
                    <Typography fontSize={15} marginTop={1}>
                        Reason For Stop
                    </Typography>
                    <Select size="small" name = "reason" sx={{ width: "250px", marginLeft: 1.5 }}
                        value={stopInfo.reason}
                        onChange={handleStopInfoChange}>
                        <MenuItem value="A">seatbelt violation</MenuItem>
                        <MenuItem value="B">parking violation</MenuItem>
                        <MenuItem value="C">vehicle equipment violation</MenuItem>
                        <MenuItem value="D">moving traffic violation</MenuItem>
                        <MenuItem value="E">registration</MenuItem>
                        <MenuItem value="F">child restraint</MenuItem>
                        <MenuItem value="G">investigative stop</MenuItem>
                        <MenuItem value="H">safety violation</MenuItem>
                    </Select>
                </Stack> */}
      </Box>

      <Box
        sx={{
          backgroundColor: "#D3D3D3",
          width: 1000,
          height: 208,
          marginLeft: "20%",
          marginTop: "2%",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 15,
          }}
        >
          Subject Information
        </Typography>
        <Stack direction="row" marginLeft={2}>
          <Typography fontSize={15} marginTop={1}>
            Age
          </Typography>
          <TextField
            label="Years"
            name="age"
            size="small"
            variant="outlined"
            value={subjectInfo.age}
            onChange={handleSubjectInfoChange}
            sx={{ marginLeft: 1.5, width: "90px" }}
          />
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Race
          </Typography>
          <Select
            size="small"
            name="race"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={setSubjectInfo.race}
            onChange={handleSubjectInfoChange}
          >
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="hispanic">Hispanic</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </Stack>
        <Stack direction="row" marginLeft={2} marginTop={2}>
          <Typography fontSize={15} marginTop={1}>
            Sex
          </Typography>
          <Select
            size="small"
            name="sex"
            sx={{ width: "150px", marginLeft: 1.5 }}
            value={subjectInfo.sex}
            onChange={handleSubjectInfoChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </Stack>
      </Box>

      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        sx={{
          marginTop: 2,
          marginBottom: 4,
          width: 200,
          height: 50,
          fontSize: 30,
        }}
      >
        SEARCH
      </Button>
    </div>
  );
}

export default DatabaseSearch;
