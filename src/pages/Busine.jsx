import React from 'react'
import { useForm } from 'react-hook-form'
import Business from "../components/business/Business";
import { addBusiness } from '../redux/business/business.actions';
import { useDispatch } from 'react-redux';
import "./Business.scss";




const Busine = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();  //register --> coge los cambios de nuestros campos, handleSubmit --> maneja el submit del formulario
    const dispatch = useDispatch();

    const onSubmit = (formData) => {                //en el onsubmit nos llegan los datos directamente del handleSubmit de react-hook-form
        console.log(formData);
        dispatch(addBusiness(formData));
    }
  
  
  
    return (
        <div className="home">
        <form onSubmit={handleSubmit(onSubmit)}>
          
           <div className="cardi">
            <div>
                <span>name</span>
                <input type="text" name="name" {...register('name',{        //register setea el nombre del campo y sus errores y mensajes de error 
                    required: "Please, enter a name",
                    pattern: {
                        value: /^[a-zA-Z]{4,10}$/,
                        message: "Please enter a valid name",
                    }
                })}/>
                {/* Si existen mostramos los mensajes de error. */}
                {errors.name && errors.name.type === 'required' && <span>{errors.name.message}</span>}          
                {errors.name && errors.name.type === 'pattern' && <span>{errors.name.message}</span>}
            </div>
            <div>
                <span>date</span>
                <input type="text" name="date" {...register('date', {pattern: {
                    value: /^(19[0-9]\d|20[0-2]\d)$/,
                    message: "Please enter a valid date"
                    }})}/>
                {errors.date && errors.date.type === 'pattern' && <span>{errors.date.message}</span>}
            </div>
            <div>
                <span>where</span>
                <input type="text" name="where" {...register('where')}/>
            </div>
            <div>
                <span>description</span>
                <input type="text" name="description" {...register('description')}/>
            </div>
            <button>Añadir Empresa</button>
            </div>
           
        </form>
        <div className="card">
        <Business />
        </div>
        </div>
      )
    };

export default Busine