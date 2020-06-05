export const fetchProjects = () => (
    $.ajax({
        url: "/api/projects"
    })
)

export const fetchProject = projectId => (
    $.ajax({
        url: `/api/projects/${projectId}`
    })
)

export const createProject = project => (
    $.ajax({
        method: 'POST',
        url: '/api/projects',
        data: {
            project
        },
        contentType: false,
        processData: false

    })
)

export const updateProject = project => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${project.id}`,
        data: {
            project
        }
    })
)

export const deleteProject = projectId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}`
    })
)

