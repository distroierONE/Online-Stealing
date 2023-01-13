import { useState } from "react";
import styles from "../../css-components/search.module.css";

export default function SearchTab({}) {
  const [searchResults1, setSearchResults] = useState([]);
  const [itemPage, setItemPage] = useState(0);

  const searchInput = "Your";

  const searchResults = [
    {
      name: "Your mother",
      desc: "Lorem ipsum dorem loros gargara de castraveti murati cu picatele colorate in rosu, galben si albastru",
      image: "",
      category: "guns",
    },
    {
      name: "Your father",
      desc: "Lorem ipsum dorem loros gargara de castraveti murati cu picatele colorate in rosu, galben si albastru",
      image: "",
      category: "guns",
    },
    {
      name: "Your sister",
      desc: "Lorem ipsum dorem loros gargara de castraveti murati cu picatele colorate in rosu, galben si albastru",
      image: "",
      category: "guns",
    },
    {
      name: "Your brother",
      desc: "Lorem ipsum dorem loros gargara de castraveti murati cu picatele colorate in rosu, galben si albastru",
      image: "",
      category: "guns",
    },
  ];

  const checkIfResult = (item) => {
    return item.name.includes(searchInput);
  };

  const updateSearch = () => {
    setSearchResults([...searchResults, searchInput]);
  };

  const ReturnFocus = () => {
    switch (itemPage) {
      case 0:
        return (
          <>
            <ul className={styles.searchResultBackground}>
              <div className={styles.searchResultTop}>
                Results for the search: {searchInput}
              </div>

              {searchResults.map((item) => {
                if (checkIfResult(item))
                  return (
                    <li key={item.name}>
                      <button className={styles.searchResults}>
                        <div className={styles.searchResultLeftSide}>
                          <div>
                            <b>{item.name}</b>
                          </div>
                          <div>{item.desc}</div>
                        </div>
                        <div className={styles.searchResultRightSide}>
                          <img
                            src={item.image}
                            alt="This would be an image if we had the budget"
                          ></img>
                        </div>
                      </button>
                    </li>
                  );
              })}
            </ul>
          </>
        );
      case 1:
        return console.log("This should not be logged");
    }
  };

  return (
    <>
      <ReturnFocus />
    </>
  );
}
