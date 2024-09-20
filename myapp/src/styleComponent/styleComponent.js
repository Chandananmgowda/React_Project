// //import { styled } from "@mui/material";
// import React from "react";
// import styled from "styled-components";
// const Button = styled.button `
//    background : ${(props)=> (props.primary ? "blue" :" gray")   };
//     color:white;
//     padding:10px 20px;
//     border:none;
//     border-radius:3px;
//     `;

//     const DangerButton = styled(Button)`
//     background:red;
//     `;

//     function StyledComponent (){
//         return(
//             <div>
//                 <Button primary> Primary Button</Button>
//                 <Button > Second Button</Button>
//                 <DangerButton> Danger Button</DangerButton>
//             </div>
//         );
//     }
// export default StyledComponent;


import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "grey")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
`;

const DangerButton = styled(Button)` // Use Button (capitalized) here
  background: red;
`;

function StyledComponent() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
      <DangerButton>Danger Button</DangerButton>
    </div>
  );
}

export default StyledComponent;



