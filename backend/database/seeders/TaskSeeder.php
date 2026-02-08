<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
    $tasks = [
        ['Learn HTML & CSS', 'Build semantic layouts and responsive designs'],
        ['Master JavaScript', 'Understand ES6+, closures, and async programming'],
        ['Learn TypeScript', 'Add strong typing to JavaScript projects'],
        ['Learn PHP', 'Understand PHP fundamentals and OOP concepts'],
        ['Learn Laravel Basics', 'Routing, controllers, and blade templates'],
        ['Advanced Laravel', 'Queues, jobs, events, and observers'],
        ['REST API with Laravel', 'Build RESTful APIs using Laravel'],
        ['GraphQL with Laravel', 'Build GraphQL APIs using Lighthouse'],
        ['Authentication System', 'Implement login, register, and password reset'],
        ['Authorization', 'Role-based and permission-based access control'],
        ['Database Design', 'Normalize databases and design schemas'],
        ['MySQL Optimization', 'Indexes, queries, and performance tuning'],
        ['Eloquent ORM', 'Master relationships and query scopes'],
        ['Laravel Validation', 'Handle form and request validation'],
        ['File Uploads', 'Handle secure file uploads'],
        ['Laravel Caching', 'Improve performance with caching strategies'],
        ['API Authentication', 'JWT and Sanctum authentication'],
        ['React Basics', 'Components, props, and state'],
        ['React Hooks', 'useState, useEffect, useMemo, useCallback'],
        ['React Router', 'Client-side routing'],
        ['React 19 Features', 'Latest features in React 19'],
        ['Vite Setup', 'Configure Vite with React'],
        ['State Management', 'Redux Toolkit or Zustand'],
        ['GraphQL Client', 'Apollo Client integration'],
        ['Form Handling', 'React Hook Form and validation'],
        ['UI Libraries', 'Tailwind CSS and component libraries'],
        ['SSR Concepts', 'Server-side rendering basics'],
        ['Next.js Basics', 'App router and server components'],
        ['API Integration', 'Consume REST and GraphQL APIs'],
        ['Error Handling', 'Global error handling strategies'],
        ['Testing Basics', 'Unit and feature testing'],
        ['PHPUnit', 'Write backend tests'],
        ['React Testing', 'Test components with Testing Library'],
        ['E2E Testing', 'Cypress or Playwright'],
        ['Docker Basics', 'Containerize full-stack apps'],
        ['Docker for Laravel', 'Laravel Sail and Docker'],
        ['CI/CD', 'Automate builds and deployments'],
        ['Git Fundamentals', 'Branching and pull requests'],
        ['GitHub Actions', 'Automate workflows'],
        ['Security Best Practices', 'Prevent XSS, CSRF, SQL Injection'],
        ['Rate Limiting', 'Protect APIs from abuse'],
        ['WebSockets', 'Real-time features with Laravel Echo'],
        ['Queues & Jobs', 'Background job processing'],
        ['Notifications', 'Email, SMS, and in-app notifications'],
        ['Logging & Monitoring', 'Track errors and performance'],
        ['Performance Optimization', 'Optimize frontend and backend'],
        ['SEO Basics', 'Optimize web apps for search engines'],
        ['Accessibility', 'Build accessible web apps'],
        ['Production Deployment', 'Deploy full-stack apps to production'],
    ];

    foreach ($tasks as $task) {
        Task::create([
            'title' => $task[0],
            'description' => $task[1],
            'is_completed' => fake()->numberBetween(0, 1),
        ]);
    }
    }
}
