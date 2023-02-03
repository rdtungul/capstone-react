import "./App.css";
import Footer from "./components/Footer";
// importing components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";

// function GoalForm(props) {
//   const [formData, setFormData] = React.useState({ goal: "", by: "" });

//   function changeHandler(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   function submitHandler(e) {
//     e.preventDefault();
//     props.onAdd(formData);
//     setFormData({ goal: "", by: "" });
//   }

//   return (
//     <div>
//       <h1>My List(s) of Goals</h1>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           name="goal"
//           placeholder="Goal"
//           value={formData.goal}
//           onChange={changeHandler}
//         />
//         <input
//           type="date"
//           name="by"
//           placeholder="By..."
//           value={formData.by}
//           onChange={changeHandler}
//         />
//         <button>Submit Goal</button>
//       </form>
//     </div>
//   );
// }

// function ListOfGoals(props) {
//   return (
//     <ul>
//       {props.allGoals.map((g) => (
//         <li key={g.goal}>
//           <span>
//             My goal is to {g.goal}, by {g.by}
//           </span>
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default function App() {
//   const [allGoals, updateAllGoals] = React.useState([]);

//   function addGoal(goal) {
//     updateAllGoals([...allGoals, goal]);
//   }

//   return (
//     <div>
//       <GoalForm onAdd={addGoal} />
//       <ListOfGoals allGoals={allGoals} />
//     </div>
//   );
// }
