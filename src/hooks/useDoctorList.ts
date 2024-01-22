import { useQuery } from "@tanstack/react-query";

import { http } from "../providers/api/http";
import { getItem, IParams } from "../services/bases";
import { params } from "../services/constants";

// Closure or Class
export const useDoctorList = () => {
  const drListParams: IParams = {
    gwt: params.gwt,
    jobId: params.req1.jobId,
    detail: btoa(JSON.stringify(params.req1.detail)),
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getDoctorList"],
    queryFn: () => getItem(drListParams),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, isError };
};

export const useDrList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getDrList"],
    queryFn: () =>
      http.get("", {
        params: {
          gwt: params.gwt,
          jobId: params.req1.jobId,
          detail: btoa(JSON.stringify(params.req1.detail)),
        },
      }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, isError };
};
