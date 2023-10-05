import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState } from "react";

export default function AdminPage() {
  const [stateBtn, setStateBtn] = useState("Создание");
  function changeStateBtn(event) {
    setStateBtn(event.target.textContent);
  }
  function renderForm() {
    if (stateBtn == "Создание") {
      return (
        <>
          <p>Курс</p>
          <input type="text" />
          <p>Описание</p>
          <input type="text" />
          <p>Город</p>
          <input type="text" />
        </>
      );
    } else if (stateBtn == "Обновление") {
      return (
        <>
          <p>ID</p>
          <input type="text" />
          <p>Курс</p>
          <input type="text" />
          <p>Описание</p>
          <input type="text" />
          <p>Город</p>
          <input type="text" />
        </>
      );
    } else {
      return (
        <>
          <p>ID</p>
          <input type="text" />
        </>
      );
    }
  }
  return (
    <>
      <Header />
      <div className={style.crud}>
        <p onClick={changeStateBtn}>Создание</p>
        <p onClick={changeStateBtn}>Обновление</p>
        <p onClick={changeStateBtn}>Удаление</p>
      </div>
      <div className={style.formInput}>
        {renderForm()}
        <button>Применить</button>
      </div>
    </>
  );
}
