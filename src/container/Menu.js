import { Nav, Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Shopnavigate from "./shopnavigate"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const info = useSelector(res => res.reducer)


  return (
    <div>
      <div style={{
        width: "100%",
        position: 'relative',
        position: "fixed",
        zIndex: "100",
        textAlign: "center"
      }} >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container >
            <Link style={{ textDecoration: "none" }} to={"/"}><Navbar.Brand href="#home">Food Store</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link style={{ textDecoration: "none" }} to={"/signin"}> <Nav.Link href="#action/3.1">Signin</Nav.Link></Link>
                <Link style={{ textDecoration: "none" }} to={"/signup"}> <Nav.Link href="#action/3.1"> Login</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Menu