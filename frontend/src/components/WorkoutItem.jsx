import React from 'react'

function WorkoutItem({workout}) {
  return (
    <div className="workout">
      <div>{new Date(workout.createdAt).toLocaleString("en-GB")}</div>
      <h2>Mood: {workout.mood}</h2>
      <button className="close">X</button>
      <h2>Activity: {workout.activity}</h2>
      <h2>Sets: {workout.sets}</h2>
      <h2>Reps: {workout.reps}</h2>
      <h2>Weight: {workout.weight} Kg</h2>
    </div>
  );
}

export default WorkoutItem