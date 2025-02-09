import { serverAxios } from "@/5_shared/axios/serverAxios";
import { useQuery } from "@tanstack/react-query";

import queryKeys from "@/5_shared/query/queryKeys";
import queryUrls from "@/5_shared/query/queryUrls";

type Wine = {
  winery: string;
  wine: string;
  rating: {
    average: string;
    reviews: string;
  };
  location: string;
  image: string;
  id: number;
};

export type FetchResponseSample = Wine[];

export const useGetSamples = () => {
  const queryFn = async () => {
    const { data } = await serverAxios.get(queryUrls.SAMPLE.WINE_LIST);
    return data;
  };

  const { data, isLoading, isError, refetch } = useQuery<FetchResponseSample>({
    queryKey: [queryKeys.SAMPLE.WINE_LIST],
    queryFn: queryFn,
    staleTime: 2 * 60 * 1000,
  });

  return {
    data: data,
    isLoading: isLoading,
    isError: isError,
    refetch: refetch,
  };
};
