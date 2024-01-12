import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

export default function GoalForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createGoal({text}));
        setText('');
    }

  return (
    <section className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">
                    Enter Goal
                </label>
                <input 
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">
                    Add goal    
                </button>    
            </div>    
        </form>
    </section>
  )
}
