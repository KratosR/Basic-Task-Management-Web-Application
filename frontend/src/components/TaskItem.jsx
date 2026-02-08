import { useMutation } from '@apollo/client'
import { Card, Button, Badge } from 'react-bootstrap'
import { CheckCircle, Circle, Pencil, Trash } from 'react-bootstrap-icons'
import { DELETE_TASK, TOGGLE_TASK } from '../graphql/mutations'

const TaskItem = ({ task, onEdit, refetch }) => {
  const [deleteTask, { loading: deleting }] = useMutation(DELETE_TASK)
  const [toggleTask, { loading: toggling }] = useMutation(TOGGLE_TASK)

  const handleDelete = async () => {
    if (window.confirm(`Delete task "${task.title}"?`)) {
      try {
        await deleteTask({ variables: { id: task.id } })
        refetch()
      } catch (error) {
        console.error('Delete error:', error)
        alert('Failed to delete task')
      }
    }
  }

  const handleToggle = async () => {
    try {
      await toggleTask({ variables: { id: task.id } })
      refetch()
    } catch (error) {
      console.error('Toggle error:', error)
      alert('Failed to toggle task')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <Card className="task-card glass-card h-100 border-0 fade-in">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div className="d-flex align-items-center">
            {task.is_completed ? (
              <CheckCircle className="text-success me-2" size={20} />
            ) : (
              <Circle className="text-warning me-2" size={20} />
            )}
            <Card.Title className="mb-0">{task.title}</Card.Title>
          </div>
          <Badge bg={task.is_completed ? "success" : "warning"}>
            {task.is_completed ? 'Completed' : 'Pending'}
          </Badge>
        </div>

        {task.description && (
          <Card.Text className="text-muted mb-3">
            {task.description}
          </Card.Text>
        )}

        <div className="small text-muted mb-3">
          Created: {formatDate(task.created_at)}
        </div>

        <div className="d-flex justify-content-between mt-3 pt-3 border-top">
          <Button
            variant={task.is_completed ? "outline-warning" : "outline-success"}
            size="sm"
            onClick={handleToggle}
            disabled={toggling}
          >
            {toggling ? '...' : task.is_completed ? 'Mark Pending' : 'Complete'}
          </Button>

          <div>
            <Button
              variant="outline-primary"
              size="sm"
              className="me-2"
              onClick={() => onEdit(task)}
            >
              <Pencil size={16} />
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
            >
              <Trash size={16} />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TaskItem