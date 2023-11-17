import './WritingMarkup.css';
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export function Bio(){
    return(
        <div className='intro'>
            <h1>Welcome to my website!</h1>
            <p className='summary'>
                you can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i> of scientists!</b>
            </p>
        </div>
    );
}