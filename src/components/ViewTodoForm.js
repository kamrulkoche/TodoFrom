import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Link from 'next/link';
import { API_TODO_LIST } from '../respons/apiResponse';
import TodoFrom from './TodoFrom';

function ViewTodoForm() {
    const [title, setTitle] = useState('Add');
    const [todoList, setTodoList] = useState({
        title: '',
        note: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
    });
    const handleTodoList = () => {
        try {
            const res = axios.get('http://task.atiar.info/api/todo', {
                'content-type': 'application/json'
            });
            console.log(res);
            setTodoList(res);
        } catch {
            console.log('error');
        }
    }

    const handleModal = (title, item) => {
        setTitle(title);
        setTodoList(item);
    }

    useEffect(() => {

    }, [])
    return (
        <div className='container mx-auto px-4'>
            <div className='pt-5 pb-3 flex flex-row-reverse'>

                <button className="" onClick={() => { document.getElementById('my_modal_2').showModal(); handleModal('Add', { title: '', note: '', start_date: '', end_date: '', start_time: '', end_time: '' }) }}>
                    <button type="button" class="btn btn-info text-white">Add ToDO</button>
                </button>

            </div>
            {
                API_TODO_LIST?.map((item, index) => (
                    <div className='flex justify-between border p-2 mb-3 '>
                        <div className=''>
                            <h3>{item?.title}</h3>
                            <p>{item?.note}</p>
                            <p>Start Date: {item?.start_date} at {item?.start_time} - {item?.end_date} at {item?.end_time} </p>
                        </div>

                        <div className='flex items-center gap-4 '>

                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                </label>
                            </div>

                            <div class="modal-dialog modal-dialog-centered">

                            </div>


                            <div>
                                <button className="" onClick={() => { document.getElementById('my_modal_2').showModal(); handleModal('Edit', item) }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                </button>
                            </div>

                            <div className='px-2' >
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </div>
                ))
            }
            <TodoFrom title={title} item={todoList} />
        </div>
    )
}

export default ViewTodoForm
