import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


function useGetAllNews() {
    const axiosPublic = useAxios();

    const { data } = useQuery({
        queryKey: ['all-news-data'],
        queryFn: async () => {
            const result = await axiosPublic.get('/all-news')
            return result.data;
        }
    })

    return [data]
}

export default useGetAllNews