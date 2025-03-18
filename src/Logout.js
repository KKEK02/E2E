import { signout } from "./Firebase";
export default function Logout(){
    const handleLogout = () => {
        signout().then(() => {
            alert('User signed out successfully!');
            window.location.href = "/login";
        }
        ).catch((error) => {
            alert(error.message);
        });
        
    };
    return(
            <button onClick={handleLogout}>Logout</button>
    );
}