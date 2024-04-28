import { useEffect, useState } from "react";
import Nav from "./Components/Nav.jsx";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult.jsx";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [filteredData, setfilteredData] = useState(null);
  const [selectedBtn, setselectedBtn] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setloading(false);
        setdata(json);
        setfilteredData(json);
      } catch (error) {
        seterror("Unable To Fetch Data");
      }
    };

    fetchFoodData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading..</div>;
  }

  const selectedButtonFood = (e) => {
    const input = e.target.textContent;
    if (input === "All") {
      setfilteredData(data);
    }
  
    else{
      const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(input.toLowerCase())
    );
    setfilteredData(filter);
    }
  };

  const dataFiltering = (e) => {
    const input = e.target.value;

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(input.toLowerCase())
    );

    setfilteredData(filter);
  };

  const menu = [
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    },
  ];

  
  return (
    <>
      <Top>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/8248da91801773.Y3JvcCw2NDQsNTA0LDM3OCw5Nw.jpg"
          alt=""
        />

        <div className="btns">
        {
          menu.map((value)=>(
           <Btn onClick={selectedButtonFood} key={value.type}>{value.name}</Btn>
          ))
        }
    
        </div>

        <input
          onChange={dataFiltering}
          type="search"
          placeholder="Search Food..."
        />
      </Top>
      <MainContainer>
        <SearchResult data={filteredData} BASE_URL={BASE_URL} />
      </MainContainer>
    </>
  );
}

export default App;

const Btn = styled.button`
  background-color: #d45050;
  padding: 0.5vw;
  border: none;
  outline: none;
  border-radius: 0.5vw;
  cursor: pointer;
  color: white;
  font-size: 1.2vw;
  font-weight: 600;
  `;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18vh;
  border-bottom: 2px solid white;
  padding: 1vw;

  img {
    width: 7vw;
    border-radius: 50%;
  }
  
  .btns {
    display: flex;
    justify-content: space-between;
    margin-top: 3vw;
    gap: 1vw;
    margin-left: 8vw;
  }
  
  input {
    background-color: #323334;
    color: white;
    border: 0.2vw solid red;
    outline: none;
    border-radius: 1vw;
    height: 2.5vw;
    font-size: 1.2rem;
    padding: 0.5vw;
    cursor: pointer;
  }

  @media (0 < width < 600px){
         flex-direction: column;
         height: 12vh;
        
  }

`;

const MainContainer = styled.div`
  height: 82vh;
  width: 100%;
  background-image: url("https://t4.ftcdn.net/jpg/02/94/21/87/360_F_294218701_se4mQtVmQoPnG4UX7J8PjvTzn8yeWyqF.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  `;
