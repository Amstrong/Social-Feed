import styled from 'styled-components';
export const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   padding: 2rem 3rem 2rem 3rem;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 1024px) {
      display: none;
   }
`;

export const Img = styled.img``;
