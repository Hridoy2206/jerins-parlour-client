import { useQuery } from "react-query"

export const useGetServices = (key, url) => {
    const { isLoading, isError, data, refetch } = useQuery(key, () =>
        fetch(url)
            .then(res => res.json())
    )

    return { isLoading, isError, data, refetch }
}

export const useDeleteData = (key, id) => {
    const { isLoading, isError, data, refetch } = useQuery(key, () => {
        fetch(`http://localhost:5000${id}`)
            .then(res => res.json())
    })
    return { isLoading, isError, data, refetch }
}

export const fetchPostData = (url, data) => {
    return fetch(`http://localhost:5000${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => res.json())
        .then(result => {
            return result;
        })
}

export const useUpdateData = (key, url) => {
    const { isLoading, isError, data, refetch } = useQuery(key, () =>
        fetch(`http://localhost:5000${url}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
    )
    return { isLoading, isError, data, refetch }
}

export const hashRoute = (hashId) => {
    const routeId = document.getElementById(hashId);
    if (routeId) {
        routeId.scrollIntoView({ behavior: 'smooth' });
    }
}