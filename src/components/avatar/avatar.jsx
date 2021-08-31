import "./style.css";
import { getUsuario } from "../../Api/usuarios";
import { useEffect } from "react";
import { useState } from "react";

const Avatar = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    getUsuario().then((usuario) => setUsuario(usuario));
  }, []);
  if (!usuario) {
    return <p>Cargando</p>;
  }
  return (
    <>
      <div className="divStyleContainer">
        <img className="avatarStyleImage" src={usuario.avatar} alt="Avatar" />
        <p className="avatarStyleText">
          {usuario.first_name} {usuario.last_name}
        </p>
        <p className="avatarStyleText">{usuario.email}</p>
      </div>
    </>
  );
};

export default Avatar;
