import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      is_completed
      created_at
      updated_at
    }
  }
`

export const GET_TASKS_BY_STATUS = gql`
  query GetTasksByStatus($is_completed: Boolean!) {
    tasksByStatus(is_completed: $is_completed) {
      id
      title
      description
      is_completed
      created_at
      updated_at
    }
  }
`