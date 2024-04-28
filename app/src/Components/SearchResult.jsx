import React from 'react'
import styled from 'styled-components'
import Btn from './Btn'

const SearchResult = ({data,BASE_URL}) => {
  return (
    <Div>
        <FoodCarts>
           {data?.map((food)=>(
               <FoodCart key={food.name}>
                 <div className='left'>
                    <img src={BASE_URL + food.image} />
                 </div>

                 <div className='right'>
                    <h3>{food.name}</h3>     
                    <p>{food.text}</p> 
                    <Btn text={"₹" + " " + food.price.toFixed(2)}/>  
                 </div>
               </FoodCart>
           ))}
        </FoodCarts>
    </Div>
  )
}

export default SearchResult

const Div = styled.div`
    
    bottom: 20%;
`
const FoodCarts = styled.div`

   display: flex;
   flex-wrap: wrap;
    row-gap: 2vw;
    column-gap: 1vw;
    justify-content: center;
    padding: 4vw;
       `
const FoodCart = styled.div`
 width: 28vw;
  height: 30vh;
  border: 0.15vw solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 2vw;

  display: flex;
  padding: 0.8vw;

  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 0.7vw;
      font-size: 1.2vw;
      font-weight: 500;
    }
    p {
      margin-top: 0.5vw;
      font-size: 1vw;
    }

  }
`