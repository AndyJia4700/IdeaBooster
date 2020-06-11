export const fetchReward = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/rewards`
    })
)

export const createReward = (projectId, reward) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${projectId}/rewards`,
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

