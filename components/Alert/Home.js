import React, { Fragment } from "react";
import { useAlert } from "react-alert";
import FooterDiv from "../DivOnClick";

const photoMenu = [
    {
        photo: "https://image.flaticon.com/icons/svg/167/167709.svg",
        text: "Quiz",
        alertText: "Try our little quiz to see what reccomendations we have for you and how can you become more confident"
    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167739.svg",
        text: "Play",
        alertText: "Play along because exercising is more fun while playing games, it will actually feel like no exercising at all"
    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167756.svg",
        text: "Resources",
        alertText: "Discover new materials that may help you understand better what next steps you should take."
    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167750.svg",
        text: "Profile",
        alertText: "Navigate to your profile to see your past activity and past quizes you submited"
    }
]
const Home = () => {
  const alert = useAlert();

  return (  
    <Fragment>
        <div style={{ display: "flex", flexDirection: "row"}}>
            {photoMenu.map((item, index) => {
                return (
                    <div style={{ cursor: "pointer"}} key={index} onClick={() => <FooterDiv />}>
                        <img src={item.photo} width="150px" height="150px" style={{ margin: "40px"}}/>
                        <div style={{ textAlign: "center", fontSize: "24px"}}>{item.text}</div>
                    </div>
                )
            })}
      </div>
    </Fragment>
  );
};

export default Home;
