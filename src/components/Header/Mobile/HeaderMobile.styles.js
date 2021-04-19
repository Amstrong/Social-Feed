import styled from 'styled-components';

export const LogoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-items: center;
   padding: 10px;
   background: #6424ff;
`;
export const Img = styled.img`
   margin-bottom: 10px;
   width: 70px;
`;

export const ImageCont = styled.div`
   background-image: url(${props => props.img});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   padding: 2rem;
   align-items: center;
   justify-content: center;
   text-align: center;
   margin-bottom: 20px;
`;
export const Information = styled.div`
   padding: 1rem;
   background: #6424ff;
   display: flex;
   flex-direction: column;
   align-items: center;
   jusity-content: center;
`;

export const Title = styled.h1`
   font-weight: 800;
   color: white;
`;

export const Text = styled.h4`
   font-weight: 500;
   color: white;
`;

export const Learn = styled.h5`
   font-weight: 400;
   text-decoration: underline;
   color: white;
`;

export const Btn = styled.button`
   background: #06f48a;
   width: 293px;
   height: 76px;
   color: white;
   border: transparent;
   font-weight: 800;
   font-size: 2em;
   text-align: center;
   font-family: 'Raleway', sans-serif;
   text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.05);
   box-shadow: 0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1);
   cursor: pointer;
`;
