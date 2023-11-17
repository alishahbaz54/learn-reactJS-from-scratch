import './ConditionalRendering.css';
function Item({name, isPacked}){
    //normal syntax:

    // if(isPacked){
    //     return <li className="item">{name} ✔</li>;
    // }else{
    //     return <li className="item">{name}</li>;
    // }
    
    // only show the item that isPacked value is false:
    
    // if(isPacked){
    //     return null;
    // }
    // else{
    //     return <li className="item">{name}</li>;
    // }

    // Conditionally including JSX:

    // return <li className='item'>{isPacked ? name + ' ✔': name}</li>

    // another element to show strike through isPacked element:

    // return <li>{isPacked ? (<del>{name + ' ✔'} </del>):(name)}</li>

    // Logical AND operator (&&) syntax:

    // return <li>{name} {isPacked && ' ✔'}</li>

    // Conditionally assigning JSX to a variable 

    let itemContent = name;
    
    // if(isPacked){
    //     itemContent = `${name} ✔`;
    // }

    // for strike through 

    if(isPacked){
        itemContent = (<del>{name + ' ✔'}</del>);
    }

    return <li className='item'>{itemContent}</li>;
}

export default function PackingList(){
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name='Space suit' />
                <Item isPacked={true} name='Helmet with a golden leaf' />
                <Item isPacked={false} name='Photo of Tam' />
            </ul>
        </section>
    )
}