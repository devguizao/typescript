import {useState, ChangeEvent, FormEvent, useEffect} from "react"
import * as React from 'react';

//CSS

import styles from "./TaskForm.module.css"

//Interface

import {ITask} from "../interfaces/Task"

interface IAppProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm: React.FunctionComponent<IAppProps> = ({btnText, taskList, setTaskList}) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHundler = (e: FormEvent <HTMLFormElement>) => {

        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, difficulty}

        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)

        console.log(taskList)

    }

    const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }

    }

  return (
  <form onSubmit={addTaskHundler} className={styles.form}>

    <div className={styles.input_container}>
        <label htmlFor="title">Título: </label>
        <input type="text"
         name="title" 
         placeholder="Título da Tarefa" 
         onChange={hadleChange}
         value={title}
         />
    </div>

    <div className={styles.input_container}>
        <label htmlFor="title">Dificuldade: </label>
        <input type="text" 
        name="difficulty" 
        placeholder="Dificuldade da Tarefa"
        onChange={hadleChange}
        value={difficulty}
        />
    </div>

    <input type="submit" value={btnText} />

  </form>
  );;
};

export default TaskForm;
