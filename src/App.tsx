import DoctorList from "./components/doctorList";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <>
      <h1 className={styles.header}>Hello world!</h1>
      <DoctorList />
    </>
  );
};

export default App;
