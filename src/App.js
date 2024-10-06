import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Detailed from "./Pages/Detailed/Detailed";
import s from './Pages/Main/Main.module.css'
import {useMainStore} from "./Store/MainStore";
import {useEffect} from "react";

function App() {
    const {fetchNewsArr} = useMainStore()

    useEffect(() => {
        fetchNewsArr()
    }, [])

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/news/:id' element={<Detailed/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
