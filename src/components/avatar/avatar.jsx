import "./style.css";
import { getUsuario } from "../../Api/usuarios";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const Avatar = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    getUsuario().then((usuario) => setUsuario(usuario));
    
    setLoading(false);
  }, []);
  
  
  return (
    <>
      {loading ?(
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

        ): null}
      {usuario ?(<div className="divStyleContainer">
        <img className="avatarStyleImage" src={usuario.avatar} alt="Avatar" />
        <p className="avatarStyleText">
          {usuario.first_name} {usuario.last_name}
        </p>
        <p className="avatarStyleText">{usuario.email}</p>
      </div>): null}
    </>
  );
};

export default Avatar;
