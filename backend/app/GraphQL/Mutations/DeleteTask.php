<?php

namespace App\GraphQL\Mutations;

use App\Models\Task;

class DeleteTask
{
    public function __invoke($rootValue, array $args)
    {
        $task = Task::findOrFail($args['id']);

        // Get the task data before deletion
        $taskData = [
            'id' => $task->id,
            'title' => $task->title,
            'description' => $task->description,
            'is_completed' => $task->is_completed,
            'created_at' => $task->created_at,
            'updated_at' => $task->updated_at,
        ];

        $task->delete();

        // Return the task data as an object
        return (object) $taskData;
    }
}
