import styled from 'styled-components';
export const Container = styled.div`
   padding: 2rem;
   margin: 100px;
   width: 300px;
   height: auto;
   background-color: #5a35f5;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   box-shadow: 0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1);
   @media (max-width: 1024px) {
      margin-left: 70px;   
      }
`;
export const Input = styled.input`
   border: none;
   font-family: 'Raleway', sans-serif;
   border-radius: 8px;
   width: 100%;
   height: 50px;
   margin: 10px 0 30px 0;
   outline-width: 0;
   padding-left: 4px;
   color: gray;

   ::-webkit-outer-spin-button,
   ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   ::placeholder,
   ::-webkit-input-placeholder {
      padding-left: 4px;
   }
   :-ms-input-placeholder {
      padding-left: 4px;
   }
`;
export const Text = styled.h4`
   color: white;
   font-weight: 400;
   margin: 0;
`;
export const Title = styled.h2`
   color: white;
   font-weight: 600;
   text-align: center;
`;
export const Center = styled.div`
   display: grid;
   align-items: center;
   justify-items: center;
`;
export const Btn = styled.button`
   cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
   width: 200px;
   margin-top: 10px;
   border-radius: 8px;
   height: 50px;
   background-color: #06f48a;
   color: white;
   font-weight: 700;
   font-size: 1.5rem;
   font-family: 'Raleway', sans-serif;
   border: none;
   text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.05);
   box-shadow: 0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1);
   outline-width: 0;
`;
export const Img = styled.img`
   width: 60px;
`;
export const ErrorText = styled.p`
   font-weight: 600;
   color: red;
   font-size: 1rem;
`;
