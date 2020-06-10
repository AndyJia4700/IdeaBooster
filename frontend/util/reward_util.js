export const fetchReward = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/rewards`
    })
)


export const createReward = (project, reward) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${project.id}/rewards`,
        data: {
            reward
        }
    })
)

export const deleteReward = (projectId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}/rewards`
    })
)

