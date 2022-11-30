import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../features/workouts/workoutSlice";
import React from "react";

function WorkoutForm() {
  const [formData, setFormData] = useState({
    mood: "",
    activity: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const { mood, activity, sets, reps, weight } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createWorkout(formData))
    setFormData({
      mood: "",
      activity: "",
      sets: "",
      reps: "",
      weight: "",
    });
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Mood</label>
            <input
              type="text"
              className="form-control"
              id="mood"
              name="mood"
              value={mood}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Activity</label>
            <input
              type="text"
              className="form-control"
              id="activity"
              name="activity"
              value={activity}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Sets</label>
            <input
              className="form-control"
              id="sets"
              name="sets"
              value={sets}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Reps</label>
            <input
              className="form-control"
              id="reps"
              type="text"
              name="reps"
              value={reps}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">weight in Kg</label>
            <input
              className="form-control"
              id="weight"
              type="text"
              name="weight"
              value={weight}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Add Workout
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default WorkoutForm;
