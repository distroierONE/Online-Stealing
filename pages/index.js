import Head from "next/head";
import { useState, useRef } from "react";
import LoadHome from "./components/home.page.js";
import LoadSearchTab from "./components/search.page.js";

export default function Main() {
  const [focus, setFocus] = useState("home");
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [searchInputSend, setSearchInputSend] = useState("Hello world!");

  const ReturnFocus = () => {
    switch (focus) {
      case "home":
        return <LoadHome />;
      case "info":
        return <LoadInfo />;
      case "favorites":
        return <LoadFavorites />;
      case "cart":
        return <LoadCart />;
      case "searchTab":
        return <LoadSearchTab valueSent={searchInputSend} />;
    }
  };

  const ChangeShadow = () => {
    switch (search) {
      case 1:
        return (
          <div
            className="shadowBoxOn shadowBox"
            onClick={() => setSearch(0)}
          ></div>
        );
      case 0:
        return console.log("Closed");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputRef.current.value !== "") {
        console.log(searchCount);
        setSearchCount(searchCount + 1);
        setSearchHistory([...searchHistory, inputRef.current.value]);
        setSearchInputSend(inputRef.current.value);
        setFocus("searchTab");
      }
    }
  };
  return (
    <>
      <Head>
        <title>Online Stealing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="Header">
        <button className="Header-Title" onClick={() => setFocus("home")}>
          <b>Online Stealing</b>
        </button>

        <div className="search">
          <input
            className={
              search ? "searchBar searchBarOff" : "searchBar searchBarOn"
            }
            type={"text"}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder="Search for anything on the store"
            onClick={() => setSearch(1)}
          ></input>
          <ul
            className={
              search
                ? "searchDropDown searchDropDownOff"
                : "searchDropDown searchDropDownOn"
            }
          >
            <div className="searchHead">
              <hr className="bar" />
              <b>Past searches:</b>
            </div>
            {searchHistory.map((item) => {
              if (searchCount < 6) {
                return (
                  <li>
                    <button key={item} className="searchDropDownElement">
                      {" "}
                      {item}{" "}
                    </button>
                  </li>
                );
              }
            })}
            <li>
              <button className="searchBottom"></button>
            </li>
          </ul>
        </div>

        <div className="Pages">
          <button className="Header-Button" onClick={() => setFocus("home")}>
            Home
          </button>
          <button className="Header-Button" onClick={() => setFocus("nature")}>
            Information
          </button>
          <button
            className="Header-Button"
            onClick={() => setFocus("favorites")}
          >
            My favorites
          </button>
          <button className="Header-Button" onClick={() => setFocus("cart")}>
            My cart
          </button>
        </div>
      </div>

      <ChangeShadow />
      <ReturnFocus />
    </>
  );
}
