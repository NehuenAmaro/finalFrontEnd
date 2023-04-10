import React, { useState } from 'react';

const ContactoForm = () => {

    const [user, setUser] = useState({
        nombre:"",
        email:"",
    });

    const handleChange = (e, prop) => {
        setUser({...user, [prop]: e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const emailValid = user.email.includes("@")
        const nombreValid = user.nombre.length > 5

        if( !emailValid || !nombreValid){
            <h1>Por favor verifique su información nuevamente</h1>
            alert('Por favor verifique su información nuevamente')
            return
        }else{
            alert(`Gracias ${user.nombre}, te contactaremos cuando antes vía mail`)
        }
    }


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}> 
                <label>Ingrese su nombre:</label>
                <input type='text' name="nombre" onChange={(e)=>handleChange(e, "nombre")}/>
                <label>Ingrese su email:</label>
                <input type='text' name="email" onChange={(e)=>handleChange(e, "email")}/>
                <button type='submit' className='mt-5'>Enviar</button>
            </form>
        </div>
    )
}
export default ContactoForm;