import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import {useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation} from "../../services/course"

export default function AdminPage() {
  const [stateBtn, setStateBtn] = useState("Создание");
  const [createCourse] = useCreateCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();


  const [inputValuesObject, setInputValuesObject] = useState({
    id:"",
    course: "",
    description: "",
    city: "",
  });

  useEffect(()=>{
    setInputValuesObject({})
  },[stateBtn])

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
/*   async function send(){
    console.log(inputValuesObject);
    if(stateBtn=="Создание"){
      createCourse(inputValuesObject);
    } else if(stateBtn=="Обновление"){
      updateCourse(inputValuesObject);
    }
  } */
  async function send(){
    console.log(inputValuesObject);
    if(stateBtn=="Создание"){
      const temp = await createCourse(inputValuesObject);
      console.log(temp.data);
    } else if(stateBtn=="Обновление"){
      const temp = await updateCourse(inputValuesObject);
      console.log(temp.data);
    }
      else if(stateBtn=="Удаление"){
      const temp = await deleteCourse(inputValuesObject);
      console.log(temp.data);
    }
  }
  function renderForm() {
    if (stateBtn == "Создание") {
      return (
        <>
          <p>Курс</p>
          <input type="text" value={inputValuesObject?.course||""} onChange={(e) => collectFromInput(e)} name="course" placeholder="...курс"/>
          <p>Описание</p>
          <input type="text" value={inputValuesObject?.description||""} onChange={(e) => collectFromInput(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" value={inputValuesObject?.city||""} onChange={(e) => collectFromInput(e)} name="city" placeholder="...город"/>
        </>
      );
    } else if (stateBtn == "Обновление") {
      return (
        <>
          <p>ID</p>
          <input type="text" value={inputValuesObject?.id||""} onChange={(e) => collectFromInput(e)} name="id" placeholder="...курс"/>
          <p>Курс</p>
          <input type="text" value={inputValuesObject?.course||""} onChange={(e) => collectFromInput(e)} name="course" placeholder="...курс"/>
          <p>Описание</p>
          <input type="text" value={inputValuesObject?.description||""} onChange={(e) => collectFromInput(e)} name="description" placeholder="...описание"/>
          <p>Город</p>
          <input type="text" value={inputValuesObject?.city||""} onChange={(e) => collectFromInput(e)} name="city" placeholder="...город"/>
        </>
      );
    } else {
      return (
        <>
          <p>ID</p>
          <input type="text" value={inputValuesObject?.id||""} onChange={(e) => collectFromInput(e)} name="id" placeholder="...курс"/>
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
        <button onClick={send}>Применить</button>
      </div>
    </>
  );
}
