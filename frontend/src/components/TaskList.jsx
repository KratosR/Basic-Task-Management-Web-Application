import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Spinner,
  Alert,
  Card,
  Badge,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import {
  PlusCircle,
  Filter,
  Search,
  ExclamationTriangle,
  ListTask,
  CheckCircle,
  Clock,
} from 'react-bootstrap-icons'
import { GET_TASKS, GET_TASKS_BY_STATUS } from '../graphql/queries'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

const TaskList = () => {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const { loading, error, data, refetch } = useQuery(
    filter === 'all' ? GET_TASKS : GET_TASKS_BY_STATUS,
    {
      variables: filter !== 'all' ? { is_completed: filter === 'completed' } : {},
    }
  )

  const handleEdit = (task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingTask(null)
  }

  if (loading && !data) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <div className="loading-spinner mb-3"></div>
          <h4>Loading Tasks...</h4>
          <p className="text-muted">Please wait while we fetch your tasks</p>
        </div>
      </Container>
    )
  }

  if (error) {
    console.error('GraphQL Error:', error)
    return (
      <Container className="my-5">
        <Alert variant="danger" className="glass-card">
          <Alert.Heading className="d-flex align-items-center gap-2">
            <ExclamationTriangle />
            Connection Error
          </Alert.Heading>
          <p className="mb-3">{error.message}</p>
          <p className="text-muted small mb-3">
            Make sure the backend server is running at http://localhost:8000
          </p>
          <hr />
          <div className="d-flex gap-2">
            <Button variant="outline-danger" onClick={() => window.location.reload()}>
              Reload Page
            </Button>
            <Button variant="danger" onClick={() => refetch()}>
              Try Again
            </Button>
          </div>
        </Alert>
      </Container>
    )
  }

  const tasks = data?.tasks || data?.tasksByStatus || []
  
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description?.toLowerCase().includes(search.toLowerCase())
  )

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.is_completed).length,
    pending: tasks.filter(t => !t.is_completed).length,
  }

  return (
    <Container className="py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <Card className="glass-card border-0">
            <Card.Body className="py-4">
              <Row className="align-items-center">
                <Col md={8}>
                  <h1 className="display-6 fw-bold mb-2">Task Manager</h1>
                  <p className="text-muted mb-0">
                    Organize your work and boost productivity
                  </p>
                </Col>
                <Col md={4} className="text-md-end">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      setEditingTask(null)
                      setShowForm(true)
                    }}
                    className="btn-gradient px-4 py-2"
                  >
                    <PlusCircle className="me-2" />
                    New Task
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Stats */}
      <Row className="mb-4">
        <Col lg={4} className="mb-3">
          <Card className="text-center glass-card border-0 h-100">
            <Card.Body className="py-4">
              <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                <ListTask size={32} className="text-primary" />
              </div>
              <h3 className="fw-bold">{stats.total}</h3>
              <p className="text-muted mb-0">Total Tasks</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4} className="mb-3">
          <Card className="text-center glass-card border-0 h-100">
            <Card.Body className="py-4">
              <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                <CheckCircle size={32} className="text-success" />
              </div>
              <h3 className="fw-bold">{stats.completed}</h3>
              <p className="text-muted mb-0">Completed</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4} className="mb-3">
          <Card className="text-center glass-card border-0 h-100">
            <Card.Body className="py-4">
              <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                <Clock size={32} className="text-warning" />
              </div>
              <h3 className="fw-bold">{stats.pending}</h3>
              <p className="text-muted mb-0">Pending</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Controls */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className="glass-card border-0 mb-3 mb-md-0">
            <Card.Body>
              <div className="d-flex align-items-center gap-3">
                <Filter className="text-muted" size={20} />
                <span className="fw-medium">Filter by:</span>
                <ButtonGroup>
                  <Button
                    variant={filter === 'all' ? 'primary' : 'outline-primary'}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === 'pending' ? 'warning' : 'outline-warning'}
                    onClick={() => setFilter('pending')}
                  >
                    Pending
                  </Button>
                  <Button
                    variant={filter === 'completed' ? 'success' : 'outline-success'}
                    onClick={() => setFilter('completed')}
                  >
                    Completed
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="glass-card border-0">
            <Card.Body>
              <InputGroup>
                <InputGroup.Text>
                  <Search />
                </InputGroup.Text>
                <FormControl
                  placeholder="Search tasks..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tasks Grid */}
      <Row>
        {filteredTasks.map((task) => (
          <Col key={task.id} lg={4} md={6} className="mb-4">
            <TaskItem task={task} onEdit={handleEdit} refetch={refetch} />
          </Col>
        ))}
      </Row>

      {/* Empty State */}
      {filteredTasks.length === 0 && !loading && (
        <Row>
          <Col>
            <Card className="glass-card border-0 text-center py-5 my-5">
              <Card.Body className="py-5">
                <div className="mb-4">
                  <div className="bg-light bg-opacity-50 rounded-circle p-4 d-inline-block">
                    <ListTask size={48} className="text-muted" />
                  </div>
                </div>
                <h3 className="mb-3">
                  {search ? 'No matching tasks found' : 'No tasks yet'}
                </h3>
                <p className="text-muted mb-4">
                  {search
                    ? `No tasks match "${search}". Try a different search.`
                    : 'Get started by creating your first task!'}
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setEditingTask(null)
                    setShowForm(true)
                  }}
                  className="btn-gradient px-4"
                >
                  <PlusCircle className="me-2" />
                  Create Your First Task
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Task Form Modal */}
      <TaskForm
        show={showForm}
        handleClose={handleCloseForm}
        task={editingTask}
        refetch={refetch}
      />
    </Container>
  )
}

export default TaskList