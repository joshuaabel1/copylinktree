
import '../assets/Usuarios.css';
import React, {useEffect, useState} from 'react';




const Usuarios = () =>{
    
    
    const [ user, setUsers ]= useState([null]);
    const [ loading, setLoading ]= useState(true);

    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/lista')
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                const userData={
                    telefono: data.results[0].telefono,
                    email: data.results[0].email,
                    perfil: data.results[0].perfil,
                };
                setUsers(userData);
            
                setLoading(false);
            });
            
    }, []);

    

    
        return(
            
            <div >
                {loading ? (
                <div class="spinner-border" className="status">
                    <span className="visually-hidden"></span>
                </div>
                ): null }
                <div>
                    { user ?(<div className="col-lg-4">
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-auto">
                                    <img 
                                        src={user.perfil} 
                                        className="rounded-circle img-thumbnail" 
                                        alt="profile" />

                                    </div>
                                    <div className="bi-whatsapp">
                                        <h4>{user.telefono}</h4>
                                        <p className="bi bi-envelope"> {user.email} </p>

                                    </div>

                            </div>

                        </div>
                    </div>) : null}
                        
                    
                </div>
            </div>

)}
export default Usuarios


