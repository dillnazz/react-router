import React, {useState, useEffect} from 'react'
import { Card } from 'antd';
import {useNavigate } from 'react-router-dom';
const { Meta } = Card;


let url="https://www.themealdb.com/api/json/v1/1/search.php?f=p"

const Meals = () => {
  const [meals, setMeals] = useState(null);
  const navigate = useNavigate();
  const fetchMeals = async () => {
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    setMeals(res.meals); //[25]

  };


  useEffect(() => {
    fetchMeals();
  }, []);

  if (!meals) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{padding:"20px", display:'flex', flexWrap:"wrap", gap:"15px"}}>
    {
      meals.map(food => ( <Card
      onClick={()=>{
        navigate(`/meals/${food.idMeal}`)
      }}
      key={food.idMeal}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={food.strMealThumb} />}
      >
        <Meta title={food.strMeal} description="strIngredients" />
        <Meta title="strMeal" description="" />
      </Card>))
    }
    </div>
  )
}

export default Meals