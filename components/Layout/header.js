import { Navbar } from 'react-bootstrap'

const pageHeader = () => {
  return (
    <div>
      {
        <Navbar>
          <Navbar.Brand href="/"><h3>PS-Tesco Assignment</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown title="Menu" id="collapsable-nav-dropdown">
              <NavDropdown.Item>Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
        </Navbar>
      }
    </div>
  )
}

export default React.memo(pageHeader)
