import Principal from "../components/principal/paginaPrincipal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
    export default function Home() {
        return (
            <div className="flex bg-[#F1F1F6] items-center justify-center h-screen">
                <Principal />
                <ToastContainer />
            </div>
        )
    }