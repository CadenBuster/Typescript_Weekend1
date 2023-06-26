import { FormEvent, useState } from "react";

const Form = () => {
  const [toDoItem, setToDoItem] = useState({
    itemName: "",
  });

  const handleClick = (index:number) => {
    console.log(toDoList.splice(index,1))
    setToDoList([...toDoList])
  }

  const [toDoList,setToDoList] = useState(['']);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setToDoList([...toDoList, toDoItem.itemName])

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <label htmlFor="addItem">Post a task to do today!</label>
          <input
            type="text"
            id="addItem"
            onChange={(event) => {
              setToDoItem({ ...toDoItem, itemName: event.target.value });
            }}
            value={toDoItem.itemName}
          />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
      <div>
        <ul>
            {toDoList.map((item,index) => {
                if (item !== ''){
                return (
                    <div className="li" key={index}><li >{item} </li> <button onClick={()=>handleClick(index)}>Remove</button></div>)}
            })}
        </ul>
      </div>
    </>
  );
};

export default Form;
