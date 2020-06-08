export const fetchProjects = () => (
    $.ajax({
        url: "/api/projects"
    })
)

export const fetchProject = projectId => {

    // debugger;
    
    return $.ajax({
        url: `/api/projects/${projectId}`
    })
}

export const createProject = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/projects',
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json'
        
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

