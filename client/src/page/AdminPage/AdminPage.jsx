import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState } from "react";

export default function AdminPage() {
  const [stateBtn, setStateBtn] = useState("Создание");


  const [inputValuesObject, setInputValuesObject] = useState({
    id:"",
    course: "",
    description: "",
    city: "",
  });


  function changeStateBtn(event) {
    setStateBtn(event.target.textContent);
    /* event.target.classList.add(style.selected); */
  }
  function collectFromInput(e){
    if(e.target.name=="course"){
      const course =  e.target.value;
      setInputValuesObject({...inputValuesObject, course: course});
      console.log(inputValuesObject);
    }
    else if(e.target.name == "description"){
      const description =  e.target.value;
      setInputValuesObject({...inputValuesObject, description: description});
      console.log(inputValuesObject);
    }
    else if(e.target.name == "city"){
      const city =  e.target.value;
      setInputValuesObject({...inputValuesObject, city: city});
      console.log(inputValuesObject);
    }
    else if(e.target.name == "id"){
      const id =  e.target.value;
      setInputValuesObject({...inputValuesObject, id: id});
      console.log(inputValuesObject);
    }
  }
  function createObj(){
    console.log(inputValuesObject);
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
          <input type="text" onChange={(e) => collectFromInput(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="city" placeholder="...город"/>
        </>
      );
    } else if (stateBtn == "Обновление") {
      return (
        <>
          <p>ID</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="id" placeholder="...курс"/>
          <p>Курс</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="course" placeholder="...курс"/>
          <p>Описание</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="city" placeholder="...город"/>
        </>
      );
    } else {
      return (
        <>
          <p>ID</p>
          <input type="text" onChange={(e) => collectFromInput(e)} name="id" placeholder="...курс"/>
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
