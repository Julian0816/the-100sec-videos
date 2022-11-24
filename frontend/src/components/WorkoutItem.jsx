import { useDispatch } from 'react-redux'
import { deleteWorkout } from '../features/workouts/workoutSlice'
import React from 'react'

function WorkoutItem({workout}) {

  const dispatch = useDispatch()

  return (
    <div className="workout">
      <div>{new Date(workout.createdAt).toLocaleString("en-GB")}</div>
      <button onClick={() => dispatch(deleteWorkout(workout._id))} className="close">X</button>
      <h2>Mood: {workout.mood}</h2>
      <h2>Activity: {workout.activity}</h2>
      <h2>Sets: {workout.sets}</h2>
      <h2>Reps: {workout.reps}</h2>
      <h2>Weight: {workout.weight} Kg</h2>
    </div>
  );
}

export default WorkoutItem