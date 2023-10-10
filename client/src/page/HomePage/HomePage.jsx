import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../services/course";

export default function HomePage() {
  /*  const arrayCourse = [
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
    {
      id: 4,
      header: "c#",
      description: "any description 4",
      city: "Grodno",
    },
  ]; */
  const { data } = useGetAllCoursesQuery();
  /* const result  = useGetAllCoursesQuery();
result.data */
  return (
    <>
      <Header />
      <div className={style.searchBar}>
        <div>
          <input
            className={style.inputHeader}
            type="text"
            placeholder="...введите название курса"
          />
        </div>
        <div>
          <button className={style.btnHeader}>Поиск</button>
        </div>
      </div>
      <div className={style.container}>
        {data?.map((el, index) => {
          //?data==undefined?(есть ли ключ data в переменной map)
          return (
            <Link to={`/course/${el.id}`} key={index}>
              <div className={style.item}>
                <h2>{el.course}</h2>
                <p>{el.description}</p>
                <p>{el.city}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
