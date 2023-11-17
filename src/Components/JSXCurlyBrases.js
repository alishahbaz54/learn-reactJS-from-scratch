import "./JSXCurlyBrases.css";
export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return <img className="avatar" src={avatar} alt={description} />;
}

export function Todo() {
  const name = "Hedy Lamarr";
  return <h1>{name}'s To Do List</h1>;
}

const today = new Date();

function fromDate(date) {
  return new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(date);
}

export function DayTodo() {
  return <h1>To Do List for {fromDate(today)}</h1>;
}

export function ColorTodoList() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  
  export function PersonTodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }