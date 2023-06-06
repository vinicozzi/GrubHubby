const RECEIVE_FILTER = "RECEIVE_FILTER"
const REMOVE_FILTER = "REMOVE_FILTER"

export const receiveFilter = filter => {
    return {
        type: RECEIVE_FILTER,
        filter
    }
}

export const removeFilter = () => {
    return {
        type: REMOVE_FILTER
    }
}