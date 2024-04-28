import React from 'react'
import styled from 'styled-components'
import Btn from './Btn'

const Nav = ({dataFiltering,selectedButtonFood}) => {
  return (
    <Top>
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/8248da91801773.Y3JvcCw2NDQsNTA0LDM3OCw5Nw.jpg" alt="" />
 
     <div className='btns'>
         <Btn click={selectedButtonFood} text={'All'}/>
         <Btn click={selectedButtonFood} text={'BreakFast'}/>
         <Btn click={selectedButtonFood} text={'Lunch'}/>
         <Btn click={selectedButtonFood} text={'Dinner'}/>
     </div>

     <input onChange={dataFiltering} type="search" placeholder='Search Food...'/>
     </Top>
  )
}

export default Nav

const Top = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 18vh;
      border-bottom: 2px solid white;
      padding: 1vw;

        img{
            width: 7vw;
            border-radius: 50%;
          }

          .btns{
             display: flex;
             justify-content: space-between;
             margin-top: 3vw;
             gap: 1vw;
             margin-left: 8vw;
          }

          input{
            background-color: #323334;
            color: white;
            border: 0.2vw solid  red;
            outline: none;
             border-radius: 1vw;
             height: 2.5vw;
             font-size: 1.2rem;
             padding: 0.3vw;
             cursor: pointer;
          }
      
`