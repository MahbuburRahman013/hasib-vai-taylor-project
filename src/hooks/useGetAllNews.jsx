import { useQuery } from "@tanstack/react-query"
import axios from "axios"


function useGetAllNews() {
   const {data} = useQuery({
    queryKey:['all-news-data'],
    queryFn: async () => {
        const result = await axios.get('https://hasib-vai-second-project.vercel.app/all-news')
        return result.data;
    }
   })

   return [data]
}

export default useGetAllNews