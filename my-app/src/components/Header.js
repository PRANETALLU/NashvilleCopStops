import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="Header">
            <p className="headerLogoText">Nashville Police Data</p>
            <Button>Graph<br/>Visualization</Button>
            <Button>Geo<br/>Visualization</Button>
            <Button>Database<br/>Search</Button>
        </div>
    );
}

export default Header; 