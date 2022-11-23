import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from '../features/workouts/workoutSlice'
import React from "react";

function WorkoutForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createWorkout({text}))
    setText('')
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Mood</label>
          <input
            type="text"
            name="mood"
            id="mood"
            value={text}
            onChange={(e) => setText(e.target.mood)}
          />
          <label htmlFor="text">Activity</label>
          <input
            type="text"
            name="activity"
            id="activity"
            value={text}
            onChange={(e) => setText(e.target.activity)}
          />
          <label htmlFor="text">Sets</label>
          <input
            type="text"
            name="sets"
            id="sets"
            value={text}
            onChange={(e) => setText(e.target.sets)}
          />
          <label htmlFor="text">Reps</label>
          <input
            type="text"
            name="reps"
            id="reps"
            value={text}
            onChange={(e) => setText(e.target.reps)}
          />
          <label htmlFor="text">weight</label>
          <input
            type="text"
            name="weight"
            id="weight"
            value={text}
            onChange={(e) => setText(e.target.weight)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Workout
          </button>
        </div>
      </form>
    </section>
  );
}

export default WorkoutForm;
