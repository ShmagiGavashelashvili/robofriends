import React, { useState, useEffect } from "react";
import RoboFriendCard from "./RoboFriendCard";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { searchBoxAction } from "../actions/searchBoxAction";
import { fetchRoboFriends } from "../actions/getRoboFrends";
import Header from "./Header";
import RandomRobots from "./RandomRobots";

interface SearchFieldState {
  searchField: string
}

interface SearchField {
  searchField: SearchFieldState
}

interface Te {
  id: number;
  name: string;
  username: string,
  email: string
};

interface RobotsState {
  robots: Array<Te>,
  loading: boolean
}

interface RobotsData {
  robotsData: RobotsState
}

function RoboFriends() {
  const [random, setRandom] = useState<number | null>(null);

  const dispatch = useDispatch();

  const { searchField } = useSelector((state: SearchField) => state.searchField);

  const { robots, loading } = useSelector((state: RobotsData) => state.robotsData);


  const randomRobots = (): void => {
    let rand = Math.floor(Math.random() * robots.length) + 1;
    setRandom(rand);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(searchBoxAction(e.target.value));
  };

  useEffect((): void => {
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
      <RandomRobots randomRobots={randomRobots} />
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
