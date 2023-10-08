import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState } from "react";

export default function AdminPage() {
  const [stateBtn, setStateBtn] = useState("Создание");
  const value1 = "", value2= "", value3= "" ;
  const newObjValues = {
    course: value1,
    description: value2,
    city: value3,
  };

  const [objValues, setValues] = useState(newObjValues);


  function changeStateBtn(event) {
    setStateBtn(event.target.textContent);
    /* event.target.classList.add(style.selected); */
  }
  function set1(e) {
    console.log("this is input: ",e.target.name);
    const value1 =  e.target.value;
    setValues({...objValues, course: value1});
    console.log(objValues);
  }
  function set2(e) {
    console.log("this is input: ",e.target.name);
    const value2 =  e.target.value;
    setValues({...objValues, description: value2});
    console.log(objValues);
  }
  function set3(e) {
    console.log("this is input: ",e.target.name);
    const value3 =  e.target.value;
    setValues({...objValues, city: value3});
    console.log(objValues);
  }
  function createObj(){
    setValues(newObjValues);
    console.log(objValues);
  }
  /*


  */
  function renderForm() {
    if (stateBtn == "Создание") {
      return (
        <>
          <p>Курс</p>
          <input type="text" onChange={(e) => set1(e)} name="course" placeholder="...курс"/>
          <p>Описание</p>
          <input type="text" defaultValue={""} onChange={(e) => set2(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" defaultValue={""} onChange={(e) => set3(e)} name="city" placeholder="...город"/>
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
        <button onClick={createObj}>Применить</button>
      </div>
    </>
  );
}
