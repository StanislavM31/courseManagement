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
  function collectFromInput(e){
    if(e.target.name=="course"){
      const value1 =  e.target.value;
      setValues({...objValues, course: value1});
      console.log(objValues);
    } else if(e.target.name == "description"){
      const value2 =  e.target.value;
      setValues({...objValues, description: value2});
      console.log(objValues);
    } else if(e.target.name == "city"){
      const value3 =  e.target.value;
      setValues({...objValues, city: value3});
      console.log(objValues);
    }
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
          <input type="text" onChange={(e) => collectFromInput(e)} name="course" placeholder="...курс"/>
          <p>Описание</p>
          <input type="text" defaultValue={""} onChange={(e) => collectFromInput(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" defaultValue={""} onChange={(e) => collectFromInput(e)} name="city" placeholder="...город"/>
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
