import { useDoctorList, useDrList } from "hooks/useDoctorList";

const DoctorList = () => {
  const { data } = useDoctorList();
  console.log("doctorList", data);
  const { data: data2 } = useDrList();
  console.log("drList", data2);

  return <div>DoctorList</div>;
};

export default DoctorList;
