import { useState } from "react";
import styles from "../../css-components/home.module.css";

function Home() {
  const [focus, setFocus] = useState("nature");

  const ReturnFocus = () => {
    switch (focus) {
      case "nature":
        return <div className={styles.placeholder}>Nature picture</div>;
      case "people":
        return <div className={styles.placeholder}>People picture</div>;
      case "animals":
        return <div className={styles.placeholder}>Animals picture</div>;
      case "furniture":
        return <div className={styles.placeholder}>Furniture picture</div>;
      case "arhitecture":
        return <div className={styles.placeholder}>Arhitecture picture</div>;
      case "landscapes":
        return <div className={styles.placeholder}>Landscapes picture</div>;
      case "weapons":
        return <div className={styles.placeholder}>Weapons picture</div>;
    }
  };

  return (
    <>
      <div className={styles.mainBody}>
        <div className={styles.sideBar}>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("nature")}
          >
            Nature
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("people")}
          >
            People
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("animals")}
          >
            Animals
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("furniture")}
          >
            Furniture
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("arhitecture")}
          >
            Arhitecture
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("landscapes")}
          >
            Landscapes
          </button>
          <button
            className={styles.sideElement}
            onClick={() => setFocus("weapons")}
          >
            Weapons
          </button>
        </div>
        <button className={styles.highlights}>
          <ReturnFocus />
        </button>
      </div>
    </>
  );
}

export default Home;
