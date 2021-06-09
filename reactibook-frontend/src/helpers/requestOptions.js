
export const postOptions = (data) => {
    return {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
}

export const putOptions = (data) => {
    return {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
}

export const deleteOptions = () => {
    return {
        method: 'DELETE',
    };
}