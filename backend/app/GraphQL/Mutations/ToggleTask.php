<?php

namespace App\GraphQL\Mutations;

use App\Models\Task;

class ToggleTask
{
    public function __invoke($rootValue, array $args)
    {
        $task = Task::findOrFail($args['id']);
        $task->is_completed = !$task->is_completed;
        $task->save();

        return $task;
    }
}
