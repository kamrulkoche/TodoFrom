import React, { useEffect, useState } from 'react'

function TodoFrom({ title, item }) {
    const [todo, setTodo] = useState()

    const handleValue = (e, key) => {
        setTodo({
            [key]: e.target.value
        })
    }

    useEffect(() => {
        setTodo({
            title: item?.title,
            note: item?.note,
            start_date: item?.start_date,
            end_date: item?.end_date,
            start_time: item?.start_time,
            end_time: item?.end_time
        })
    }, [item])

    return (
        <div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    </form>
                    <h3 className="font-bold text-lg text-center pb-2" >{title}</h3>
                    <hr className='pb-5' />
                    <input type="text" placeholder="Write task title" className="border border-slate-900 rounded  w-full p-2 pb" value={todo?.title} onChange={(e) => handleValue(e, 'title')} />
                    <hr className='pb-3' />
                    <input type="text" placeholder="Write task note" className="border border-slate-900 rounded  w-full p-2 pb-20" value={todo?.note} onChange={(e) => handleValue(e, 'note')} />

                    <div className='pt-5 flex gap-5'>
                        <input type="text" placeholder="Start date" className="border border-slate-900 rounded  w-full p-2 " value={todo?.start_date} onChange={(e) => handleValue(e, 'start_date')} />
                        <input type="text" placeholder="Start Time" className="border border-slate-900 rounded  w-full p-2 " value={todo?.end_date} onChange={(e) => handleValue(e, 'end_date')} />
                    </div>

                    <div className='py-5 flex gap-5'>
                        <input type="text" placeholder="End date" className="border border-slate-900 rounded  w-full p-2 " value={todo?.start_time} onChange={(e) => handleValue(e, 'start_time')} />
                        <input type="text" placeholder="End Time" className="border border-slate-900 rounded  w-full p-2 " value={todo?.end_time} onChange={(e) => handleValue(e, 'end_time')} />
                    </div>

                    <div className='flex justify-center '>
                        <button type="button" class="btn btn-info px-10  text-white ">Add</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default TodoFrom
