
import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";
import { useEffect, useState } from "react";


const Body=()=>{
//local state variable
  const [List, setList]=useState(resList);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&page_type=DESKTOP_WEB_LTSTING");

    const json= await data.json();
    console.log(json);
   // setList(json.data.cards[0].card.card);
    
  }

  // const fetchData = async () => {
  //   try {
  //     // 1. Handle potential network errors:
  //     const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.51800&lng=88.38320");
  
  //     // 2. Check for successful HTTP response:
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     // 3. Parse JSON and handle potential parsing errors:
  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // Handle the error gracefully, e.g., display an error message to the user
  //   } finally {
  //     // Optional cleanup logic (e.g., closing connections)
  //   }
  
  //   // Use the fetched data (json) here, assuming successful execution
   
  // };


    return(
        <div className="body">
            <div className="filter-btn"
            onClick={
              ()=>{
              const List=resList.filter(
                (res)=> res.info.sla.deliveryTime<30
              );
              setList(List);
              console.log(List);
            }
          }
            >
              <button>Fast deleviry service </button>
            </div>
            <div className="restro-container">
            {
              List.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
              ))
            } 
            </div>         
        </div>
    );
}

export default Body;