// 1st Example

// export default function Button(){
//     return(
//         <button>I don't do anything</button>
//     );
// }

// 2nd Example

/*
1. Declare a function inside the component
2. Implement the logic inside the function
3. and pass the function name as prop to the button element.
*/
// export default function ButtonClick(){
//     function handleClick(){
//         alert('You clicked me!');
//     }
//     return(
//         <button onClick={handleClick}>
//             Click Me!
//         </button>
//     );
// }

// 3rd example

// export default function InlineEventHandler(){
//     return(
//         <button onClick={function handleClick(){
//             alert('Inline function called.');
//         }}>
//             Click the Inline Function
//         </button>
//     );
// }

// same as the above using arrow function

// export default function ArrowFunctionButton(){
//     return(
//         <button onClick={() =>
//             {alert('Arrow Function called.')
//         }}>Arrow Function Button</button>
//     )
// }

/* The above components of button are equivalent */

// ======================================================================================================
// Reading props in event handler
// ======================================================================================================

// 4th example
// function AlertButton({message,children}){
//   return(
//     <button onClick={() =>{alert(message)}}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar(){
//   return(
//     <div>
//       <AlertButton message='Playing!'>Play Movie</AlertButton>
//       <AlertButton message='Uploading!'>Upload Image</AlertButton>
//     </div>
//   );
// }

// ======================================================================================================
// Passing event handlers as props
// ======================================================================================================

// 5th example
// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayClick(){
//     alert(`Playing ${movieName}!`);
//   }

//   return(
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton(){
//   return(
//     <Button onClick={() =>alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar2nd(){
//   return(
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

// ======================================================================================================
// Naming event handler props
// ======================================================================================================

// 6th example
function Button({onSmash, children}){
  return(
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function EvenntButton(){
  return(
    <div>
      <Button onSmash={() =>alert('Playing!')}>Play Movie</Button>
      <Button onSmash={() =>alert('Uploading!')}>Upload Image</Button>
    </div>
  )
}