import Header from "../../Components/Header/Header";
import style from "./style.module.scss";

export default function HomePage() {
  const arrayCourse = [
    {
      id: 1,
      header: "js",
      description: "any description 1",
      city: "Minsk",
    },
    {
      id: 2,
      header: "python",
      description: "any description 2",
      city: "Brest",
    },
    {
      id: 3,
      header: "php",
      description: "any description 2",
      city: "Grodno",
    },
  ];
  return (
    <>
      <Header />
      <div className={style.searchBar}>
        <div>
        <input className={style.inputHeader} type="text" placeholder="...введите названеи курса" />
        </div>
        <div>
          <button className={style.btnHeader}>Поиск</button>
        </div>
      </div>
      <div className={style.container}>
        {arrayCourse.map((el, index) => {
          return (
            <div key={index} className={style.item}>
              <h2>{el.header}</h2>
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
