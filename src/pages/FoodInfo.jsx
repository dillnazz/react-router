import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";

let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
let imgUrl = "https://www.themealdb.com/images/ingredients/";

const FoodInfo = () => {
  const params = useParams();
  const [food, setFood] = useState(null);
  const navigate = useNavigate();
  

  const [ing, setIng] = useState([]);
  const [measure, setMeasure] = useState([]);

  let hasIng = [];
  const hasMeasure = [];

  // const navigate = useNavigate();

  const fetchMeals = async () => {
    const req = await fetch(url + params.id);
    const res = await req.json();
    console.log(res);
    setFood(res.meals[0]); //[{...}]
    for (let i = 1; i < 21; i++) {
      if (res.meals[0][`strIngredient1${i}`]?.length > 0) {
        hasIng.push(res.meals[0][`strIngredient${i}`], i);
        hasMeasure.push(res.meals[0][`strMeasure${i}`], i);
      }
    }
    setIng([...hasIng]);
    setMeasure([...hasMeasure]);
    setFood(res.meals[0]);
  };

  useEffect(() => {
    fetchMeals();
  }, [params.id]);

  if (!food) {
    return <h2>Loading...</h2>;
  }

  console.log("params: ", params);
  console.log("params: ", params.id);
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        padding: "0 20px",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "20px" }}>Food Name</h3>
        <img
          width={280}
          src={food.strMealThumb}
          //  src='https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg' alt=""
        />
        <br />
        <br/>
        {food?.strTags ?? <p>No tags</p>}
        {food.strTags?.split(',').map((btn, index) => (
          <Button key={index} style={{ marginRight: "5px" }}>
            {btn}
          </Button>
        ))}
        <br />
        <br />
        <Button
          type="primary"
          onClick={() => {
            // navigate(`/meals/${food.idMeal}`)
            navigate(-1);
          }}
        >
          <span
            style={{
              marginRight: "5px",
            }}
          ></span>
          <span>Back</span>
        </Button>
      </div>
      <div>
        <h3 style={{ marginBottom: "20px" }}>Ingridients</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {ing?.map((item, index) => (
            <div
            key={index}
              style={{
                textAlign: "center",
              }}
            >
              <img width={200} src={`${imgUrl}${item}.png`} alt="" />
              <p>{measure[index]} {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;
