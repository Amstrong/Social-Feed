import styled from 'styled-components';

export const Section = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
`;
export const Information = styled.div`
   background: #6424ff;
   padding: 0 5rem 8rem 5rem;
   display: flex;
   flex-direction: column;
   @media (max-width: 1024px) {
      padding: 0 5rem 8rem 2rem;
   }
`;

export const Title = styled.h1`
   font-size: 3em;
   font-weight: 900;
   color: white;
   @media (max-width: 1024px) {
      font-size: 2.5em;
   }
`;
export const Subtitle = styled.p`
   font-size: 1.2em;
   font-weight: 300;
   color: white;
`;
export const Soft = styled.span`
   font-size: 1em;
   font-weight: 300;
   color: white;
`;
export const Logo = styled.img`
   width: 70px;
   height: 40px;
   margin: 2rem 0 2rem 0;
`;
export const Image = styled.div`
   background-image: url(${props => props.img});
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
`;
export const Shadow = styled.div`
   color: white;
   font-size: 0.8rem;
   text-align: center;
   position: absolute;
   bottom: 0px;
   background: rgba(0, 0, 0, 0.4);
   padding: 10px;
`;
export const BtnContainer = styled.div`
   float: right;
   padding-right: 20px;
   padding-top: 2rem;
`;
