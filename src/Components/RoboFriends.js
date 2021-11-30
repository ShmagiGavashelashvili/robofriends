import React, { useState, useEffect } from "react";
import RoboFriendCard from "./RoboFriendCard";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { searchBoxAction } from "../actions/searchBoxAction";
import { fetchRoboFriends } from "../actions/getRoboFrends";
import Header from "./Header";

function RoboFriends() {
  const [random, setRandom] = useState(null);

  const dispatch = useDispatch();

  const searchFieldFromState = useSelector((state) => state.searchField);
  const { searchField } = searchFieldFromState;

  const robotsData = useSelector((state) => state.robotsData);
  const { robots, loading } = robotsData;

  const randomRobots = () => {
    let rand = Math.floor(Math.random() * robots.length) + 1;
    setRandom(rand);
  };

  const onSearchChange = (e) => {
    dispatch(searchBoxAction(e.target.value));
  };

  useEffect(() => {
    if (!robots.length) {
      dispatch(fetchRoboFriends());
    }
  }, [dispatch, robots.length]);

  const filteredRobots = robots.filter(
    (robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
      robot.email.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="container">
      <Header />
      <button onClick={randomRobots}>Click To Get Random Robots</button>
      <SearchBox onSearchChange={onSearchChange} />
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "50px", color: "#ffffff" }}>Loading...</p>
      ) : (
        <Scroll>
          <div className="robofriends">
            {robots.length &&
              filteredRobots.map((robot) => (
                <RoboFriendCard key={robot.id} {...robot} random={random} />
              ))}
          </div>
        </Scroll>
      )}
    </div>
  );
}

export default RoboFriends;
