import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import { CREATE_TASK, UPDATE_TASK } from '../graphql/mutations'

const TaskForm = ({ show, handleClose, task, refetch }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    is_completed: false,
  })

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description || '',
        is_completed: task.is_completed,
      })
    } else {
      setFormData({
        title: '',
        description: '',
        is_completed: false,
      })
    }
  }, [task, show])

  const [createTask, { loading: creating }] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      handleClose()
      refetch()
    },
  })

  const [updateTask, { loading: updating }] = useMutation(UPDATE_TASK, {
    onCompleted: () => {
      handleClose()
      refetch()
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (task) {
      updateTask({
        variables: {
          id: task.id,
          title: formData.title,
          description: formData.description,
          is_completed: formData.is_completed,
        },
      })
    } else {
      createTask({
        variables: {
          title: formData.title,
          description: formData.description,
          is_completed: formData.is_completed,
        },
      })
    }
  }

  const isSubmitting = creating || updating

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? 'Edit Task' : 'Create New Task'}</Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description (optional)"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Mark as completed"
              name="is_completed"
              checked={formData.is_completed}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            variant={task ? "primary" : "success"} 
            type="submit" 
            disabled={isSubmitting || !formData.title.trim()}
            className="btn-gradient"
          >
            {isSubmitting ? (
              <>
                <Spinner size="sm" className="me-2" />
                {task ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              task ? 'Update Task' : 'Create Task'
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TaskForm