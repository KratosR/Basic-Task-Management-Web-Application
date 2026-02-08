import { Link, useLocation } from 'react-router-dom'
import { Container, Navbar, Nav, Badge } from 'react-bootstrap'
import { ClipboardCheck, ListTask, CheckCircle, Clock } from 'react-bootstrap-icons'

const Header = () => {
  const location = useLocation()

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active fw-bold' : ''
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center gap-2">
          <ClipboardCheck size={28} />
          <span>Task Manager</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={getActiveClass('/')}>
              <ListTask className="me-1" />
              All Tasks
            </Nav.Link>
            <Nav.Link as={Link} to="/pending" className={getActiveClass('/pending')}>
              <Clock className="me-1" />
              <Badge bg="warning" className="me-1">Pending</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/completed" className={getActiveClass('/completed')}>
              <CheckCircle className="me-1" />
              <Badge bg="success" className="me-1">Completed</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header