export const fetchRewards = () => (
    $.ajax({
        url:'api/rewards'
    })
)

export const fetchReward = (rewardId) => (
    $.ajax({
        url: `/api/rewards/${rewardId}`
    })
)

export const createReward = (reward) => (
    $.ajax({
        method: 'POST',
        url: `/api/rewards`,
        data: {
            reward
        }
    })
)

export const updateReward = reward =>{
    // debugger
    return $.ajax({
      method: "PATCH",
      url: `/api/rewards/${reward.id}`,
      data:{reward},
    })
}


export const deleteReward = (rewardId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/rewards/${rewardId}`
    })
)

