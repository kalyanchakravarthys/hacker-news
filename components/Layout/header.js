import {Nav, Navbar, NavDropdown} from "react-bootstrap"

export default () => {
    return (<div>
        <Navbar>
            <Navbar.Brand href="/">Tesco Assignment</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Menu" id="collapsable-nav-dropdown">
                        <NavDropdown.Item>Home</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>About</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>)
}