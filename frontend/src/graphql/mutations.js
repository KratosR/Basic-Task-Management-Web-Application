import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $description: String, $is_completed: Boolean) {
    createTask(input: {
      title: $title,
      description: $description,
      is_completed: $is_completed
    }) {
      id
      title
      description
      is_completed
      created_at
    }
  }
`

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $title: String, $description: String, $is_completed: Boolean) {
    updateTask(input: {
      id: $id,
      title: $title,
      description: $description,
      is_completed: $is_completed
    }) {
      id
      title
      description
      is_completed
      updated_at
    }
  }
`

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      title
    }
  }
`

export const TOGGLE_TASK = gql`
  mutation ToggleTask($id: ID!) {
    toggleTask(id: $id) {
      id
      title
      is_completed
      updated_at
    }
  }
`