import { http } from "../../providers/api/http";

export interface IParams {
  jobId: number;
  detail: string;
  token?: string;
  gwt: string;
}
interface IItem {
  id: number;
}

export const getItem = async (params: IParams) => {
  const { gwt, jobId, detail, token } = params;
  const res = await http.get("", {
    params: {
      gwt,
      jobId,
      detail,
      token,
    },
  });
  return res.data;
};

export const postItem = async (
  params: IParams,
  item: IItem
): Promise<IItem> => {
  const { gwt, jobId, detail, token } = params;
  const res = await http.post("", item, {
    params: {
      gwt,
      jobId,
      detail,
      token,
    },
  });
  return res.data;
};

export const deleteItem = async (
  params: IParams,
  id: number
): Promise<{ id: number }> => {
  const { gwt, jobId, detail, token } = params;
  const res = await http.delete(`/${id}`, {
    params: {
      gwt,
      jobId,
      detail,
      token,
    },
  });

  return res.data;
};

export const editItem = async (
  params: IParams,
  item: IItem
): Promise<{ id: number }> => {
  const { gwt, jobId, detail, token } = params;
  const res = await http.put(`/${item.id}`, {
    params: {
      gwt,
      jobId,
      detail,
      token,
    },
  });

  return res.data;
};

// export const getItemVer2 = async (params: IParams) => {
//   const { jobId, detail, token, gwt } = params;
//   const res = await http.get(
//     `?gwt=${gwt}&jobId=${jobId}&detail=${detail}&token=${token}`
//   );
//   return res.data;
// };
