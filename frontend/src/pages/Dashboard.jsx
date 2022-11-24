import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
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
  }, [user, navigate, dispatch, isError, message]);

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

      <section className="content">
        {workouts.length > 0 ? (
          <div className="workouts">
            {workouts.map((workout) => (
              <WorkoutItem key={workout._id} workout={workout} />
            ))}
          </div>
        ) : (<h3>You have not saved any workouts</h3>)}
      </section>
    </>
  );
}

export default Dashboard;
