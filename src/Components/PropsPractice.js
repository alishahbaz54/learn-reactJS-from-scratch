import "./PropsPractice.css";
import { getImageUrl } from "./PropsPracticeUtils";
function Avatar({person, size}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function PropsProfile() {
  return (
    <div>
        <Avatar size={100} person={{
            name:'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
        }}
        />

        <Avatar size={80}
        person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh'
        }}
        />

        <Avatar 
        size={50}
        person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
        }}
        />

    </div>
  );
}

export function CardProfile(){
return(
    <Card>
      <h1>Avatar</h1>
        <Avatar size={100}
        person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
        }}
        />
        <p>This is a card</p>
        <span style={{color:'red', textDecoration:'underline',fontFamily:'sans-serif Thoma',fontWeight:'bolder'}}>Card description</span>
    </Card>
);
}

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}