import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="Header">
            <Button
            href="/"
            sx=
            {{mt: -1, mr: 80, 
            fontWeight: 700, fontSize: 25, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Nashville Police Data
            </Button>
           {/* <Button
            href="/queryReport"
            sx=
            {{mt: -1, mr: 6, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Query<br/>Report
            </Button>*/}
            
            <Button
            href="/graphVisualization"
            sx=
            {{mt: -1, mr: 6, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Graph<br/>Visualization
            </Button>

            <Button 
            href="/geoVisualization"
            sx={{mt: -1, mr: 6, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Geo<br/>Visualization
            </Button>

            <Button 
            href="/databaseSearch"
            sx={{mt: -1, mr: 4, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Database<br/>Search
            </Button>
        </div>
    );
}

export default Header; 