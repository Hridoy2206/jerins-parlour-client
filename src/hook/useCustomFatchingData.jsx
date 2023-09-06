import { useQuery } from "react-query"

const useGetServices = (key, url) => {
    const { isLoading, isError, data } = useQuery(key, () =>
        fetch(url)
            .then(res => res.json())
    )

    return { isLoading, isError, data }
}
export { useGetServices }