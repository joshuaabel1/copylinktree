import { useParams } from 'react-router-dom';
import Avatar from "../../components/avatar/avatar.jsx";
export default function UserPage(props) {
    const { user } = useParams();

    // TODO: Si el usuario no existe, redireccionar a la pagina de not found

    return (
        <>
            <h1>UserPage</h1>
            <Avatar />

        </>
    );
}
