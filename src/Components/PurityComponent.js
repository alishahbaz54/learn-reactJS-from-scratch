// Pure components example this section follow the rule. (pure component)
function Recipe({drinks}){
    return(
        <ol>
            <li>Boild {drinks} cups of water.</li>
            <li>Add {drinks} spoons of tea and {0.5 * drinks} spoons of spice.</li>
            <li>Add {0.5 * drinks} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}

export default function PureComponent(){
    return(
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinks={2} />
            <h2>for a gethering</h2>
            <Recipe drinks={4} />
        </section>
    );
}

// This section cannot follow the rule. (impure component)
let guest = 0;
function Cup(){
    guest += 1;
    return <h2>Tea cup for guest #{guest}</h2>
}

 export function TeaSet(){
    return(
        <>
        <Cup />
        <Cup />
        <Cup />
        </>
    );
}

// The solution of the above impure component is to pass props gues in the cup component
function CupProps({cup}){
    return <h2>Tea cup for guest #{cup}</h2>;
}
export function TeaSetProps(){
    return(
        <>
            <CupProps cup={1} />
            <CupProps cup={2} />
            <CupProps cup={3} />
        </>
    );
}

// local mutation example
function ArrayCup({cup}){
    return <h2>Tea cup for guest #{cup}</h2>
}
export function ArrayTeaSet(){
    let cups = [];
    for(let i = 1; i <= 12; i++){
        cups.push(<ArrayCup key={i} cup={i} />);
    }

    return cups;
}