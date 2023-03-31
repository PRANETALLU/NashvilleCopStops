import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="Header">
            <p className="headerLogoText">Nashville Police Data</p>
            <Button 
            sx=
            {{mt: -1, mr: 3, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Graph<br/>Visualization
            </Button>
            <Button 
            sx={{mt: -1, mr: 3, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Geo<br/>Visualization
            </Button>
            <Button 
            sx={{mt: -1, mr: 3, 
            fontWeight: 700, fontSize: 23, 
            color: "white", 
            ":hover":{color: "#D9D9D9"}}}>
                Database<br/>Search
            </Button>
        </div>
    );
}

export default Header; 