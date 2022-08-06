import '../css/tareas.css';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const TareaForm = (props) =>{

    const [input, setInput] = useState('');
    // e -> evento
    const manejarCambio = e =>{
        setInput(e.target.value);
    };
    const manejarEnvio = e =>{
        // preventDefault -> evita que se vuelva a cargar la pag.
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completed: false
        }

        props.onSubmit(tareaNueva);
    };

    return(
        <form className='tarea-form' onSubmit={manejarEnvio}>
            <input 
            className='tarea-input' 
            type='text' 
            placeholder='Escriba una tarea' 
            name='texto'
            onChange={manejarCambio}
            />

            <button className='tarea-button'>
                Agregar tarea
            </button>
        </form>
    ) 
};
const Tarea = ({id, texto, completed, completedTarea, removeTarea}) =>{
    return(
        <div className={completed ? 'container-tarea completed' : 'container-tarea'}>
            <div className='tarea-text' onClick={() => completedTarea(id)}>
                {texto}
            </div>
            <div className='tarea-icono' onClick={() => removeTarea(id)}>
                <i>X</i>
            </div>
        </div>

    )
};
const ListaTarea = () =>{
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            // tarea agragada al principio del arreglo,y las ...tareas,
            //  estan pasando de arreglo a tareas individuales
            // Arreglo nuevo
            const tareaActualizadas = [tarea,...tareas];
            setTareas(tareaActualizadas);
        }
    };
    const eliminarTarea = id =>{
        const tareaActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTareas(tareaActualizadas);

    };
    const completarTarea = id =>{
        const tareaActualizadas = tareas.map(tarea=>{
            if(tarea.id === id){
                tarea.completed = !tarea.completed;
            }
            return tarea;
        });
        setTareas(tareaActualizadas)
    };
    return(
        <div>
            <TareaForm onSubmit={agregarTarea}/>
            <div className='tarea-list'>
                {
                    tareas.map((tarea) =>
                        <Tarea 
                        key={tarea.id} 
                        id={tarea.id} 
                        texto={tarea.texto} 
                        completed={tarea.completed} 
                        completedTarea={completarTarea}
                        removeTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </div>
    )
};

export const Tareas = () => {
  return (
    <div className='container-tareas'>
        <h1 className="tittle">Tareas</h1>
        <div className='tarea'>
            <ListaTarea/>
        </div>
    </div>
  )
};

export default Tareas