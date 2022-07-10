import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)


    const onSumbit = (e) => {
        e.preventDefault()
        if(!text || !day) {
            alert('please add task')
            return
        }

        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSumbit}>
        <div className="form-control">
            <label >Name</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label >Comment</label>
            <input type="text" placeholder="Add Some information about the task" value={day} onChange={(e)=> setDay(e.target.value)}/>
        </div>
        
        <div className="form-control form-control-check">
            
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            <label >Reminde me</label>
        </div>

        <input type="submit" value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default AddTask
