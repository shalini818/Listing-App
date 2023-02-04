import React, { useState } from 'react';

function Todolist() {
  const [task, setTask] = useState({
    name: '',
    date: '',
    completed: false,
  });
  const [itemsarray, setItemsArray] = useState([]);

  //Add items
  const additems = () => {
    console.log();
    itemsarray.push(task);
    setItemsArray([...itemsarray]);
    setTask({
      name: '',
      completed: false,
      date: '',
      index: 0,
    });
  };

  // Input
  const inputChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  // Delete items
  const deleteItem = (index) => {
    itemsarray.splice(index, 1);

    setItemsArray([...itemsarray]);
  };

  ////edit data//
  const editdata = (ele) => {
    console.log(ele);
    setTask({
      name: ele.name,
      date: ele.date,
      completed: 'false',
    });
  };
  /////checkbox edit data//
  const checkboxeditdata = (index) => {
    let item = itemsarray[index];
    item.completed = !item.completed;
    itemsarray[index] = item;
    setitems([...itemsarray]);
  };

  const handleCheckbox = (index) => {
    let item = itemsarray[index];
    item.completed = !item.completed;
    itemsarray[index] = item;
    setItemsArray([...itemsarray]);
  };
  return (
    <main className={'container'}>
      <h1>Todo App</h1>

      <div className={'row'}>
        <div
          className={'col-md-4'}
          style={{ marginTop: '30px', textAlign: 'center' }}
        >
          <input
            type={'text'}
            className={'form-control'}
            value={task.name}
            name={'name'}
            placeholder={'Add Items....'}
            onChange={inputChange}
          />
          <input
            type={'date'}
            style={{ marginTop: '20px' }}
            className={'form-control'}
            value={task.date}
            name={'date'}
            placeholder={'Task end date'}
            onChange={inputChange}
          />
          <br></br>

          <div>
            <button
              type="button"
              // className="btn btn-outline-primary"
              className="addBtn"
              onClick={additems}
              style={{
                textAlign: 'left',
                top: '5px',
                bottom: '250px',
                left: '20px',
                position: 'relative',
              }}
            >
              Add Items
            </button>
          </div>

          <div
            className={'col'}
            style={{
              textAlign: 'left',
              bottom: '150px',
              left: '600px',
              position: 'relative',
              top: '2px',
            }}
          >
            <ul className={'list-group'}>
              {itemsarray.map((ele, i) => (
                <li
                  key={i}
                  className="list-group-item"
                  aria-current="true"
                  style={
                    ele.completed ? { textDecoration: 'line-through' } : {}
                  }
                >
                  <input type="checkbox" onChange={() => handleCheckbox(i)} />
                  {ele.name} {ele.date}
                  <button
                    className={'btn btn-danger'}
                    style={{
                      marginLeft: '300px',
                      top: '1px',
                      bottom: '25px',
                      position: 'relative',
                    }}
                    onClick={() => deleteItem(i)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editdata(ele)}
                    className="btn btn-outline-primary"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todolist;
