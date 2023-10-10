import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { useGetCourseIdQuery } from "../../services/course";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

export default function SinglePage() {
  const params = useParams();
  const { data } = useGetCourseIdQuery(params.id);
  console.log(data);
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div>{params.id}</div>
        <h2>{data?.course}</h2>
        <p>{data?.description}</p>
        <p>{data?.city}</p>
        <Link to={`/`}>
          <button>Вернуться</button>
        </Link>
      </div>
    </>
  );
}
