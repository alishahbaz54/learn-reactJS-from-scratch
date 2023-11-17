import { getImageUrl } from "./PropsPracticeUtils";
import { people } from "./RenderingListData"
import './RenderingList.css';

  export default function List(){
    // const listItems = people.map(person => <li>{person}</li>);
    const chemists = people.filter(x => 
        x.profession === 'chemist'
        );
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {` ${person.profession} known for ${person.accomplishment}`}
            </p>
        </li>
        );
    return <ul>{listItems}</ul>
  }