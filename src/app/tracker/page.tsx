import TrackerForm from "../components/TrackerForm";
import ExerciseList from "../tracker/exerciseList";

const TrackerPage = () => {
  return (
    <>
      <TrackerForm />;<p className="text-center text-3xl m-4">Exercises</p>
      <ExerciseList />
    </>
  );
};

export default TrackerPage;
