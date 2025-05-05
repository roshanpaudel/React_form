// ControlledVsUncontrolled.jsx
import React, { useState, useRef } from "react";

export default function ControlledVsUncontrolled() {
  // Step 1: Declare state for the controlled input
  // This value will be updated using React state management
  const [controlledValue, setControlledValue] = useState("");

  // Step 2: Create a ref for the uncontrolled input
  // This allows us to directly access the DOM element later
  const uncontrolledInputRef = useRef();

  // Step 3: Handle changes to the controlled input
  // This updates the controlledValue state every time the user types
  const handleControlledChange = (event) => {
    // Step 3.1: User types something in the controlled input
    // Step 3.2: onChange is triggered and receives the new value via event.target.value
    // Step 3.3: React calls setControlledValue to update the internal state
    // Step 3.4: React re-renders the component and passes the new state value to the input
    setControlledValue(event.target.value);
  };

  // Step 4: Handle form submission
  const handleSubmit = (event) => {
    // Step 4.1: Prevent default form submission behavior (which reloads the page)
    event.preventDefault();

    // Step 4.2: controlledValue already has the current state-managed input
    // Step 4.3: uncontrolledInputRef.current.value reads the DOM value directly from the input field
    alert(
      `Controlled input: ${controlledValue}\nUncontrolled input: ${uncontrolledInputRef.current.value}`
    );
  };

  // Step 5: Render the component
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header section */}
      <h1 className="text-xl font-bold mb-4">
        Controlled vs Uncontrolled Inputs
      </h1>

      {/* Form containing both inputs */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Controlled input field */}
        <div>
          <label className="block font-medium mb-1">Controlled Input:</label>
          <input
            type="text"
            value={controlledValue} // Value is tied to React state
            onChange={handleControlledChange} // Updates state on change
            className="border px-2 py-1 w-full"
          />
        </div>

        {/* Uncontrolled input field */}
        <div>
          <label className="block font-medium mb-1">Uncontrolled Input:</label>
          <input
            type="text"
            ref={uncontrolledInputRef} // Value is accessed via ref (not managed by React)
            className="border px-2 py-1 w-full"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

/*
Explanation:
- Controlled Input Data Flow:
  1. User types in input field.
  2. onChange triggers handleControlledChange.
  3. handleControlledChange uses setControlledValue to update state.
  4. React re-renders and passes the new state back to the input’s value.
  5. The input’s displayed value reflects the state instantly.

- Uncontrolled Input Data Flow:
  1. User types in input field.
  2. Input updates its value internally (like a regular HTML input).
  3. React doesn’t track it in real-time.
  4. On submit, the value is read from the DOM using uncontrolledInputRef.current.value.

- Controlled inputs are ideal when you need validation, conditional rendering, or real-time updates.
- Uncontrolled inputs are simpler and useful when immediate tracking isn’t needed.
*/
