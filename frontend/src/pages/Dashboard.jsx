import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WorkoutForm from "../components/WorkoutForm";
import Spinner from "../components/Spinner";
import React from "react";
import { getWorkouts, reset } from "../features/workouts/workoutSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { workouts, isLoading, isError, message } = useSelector(
    (state) => state.workouts
  );

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getWorkouts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate]);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Workouts Dashboard</p>
      </section>

      <WorkoutForm />
    </>
  );
}

export default Dashboard;
