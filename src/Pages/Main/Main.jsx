import React from 'react';
import NewsPreview from "../../Components/NewsPreview/NewsPreview";
import AddNewNews from "../../Components/NewsItem/AddNewNews";
import {useMainStore} from "../../Store/MainStore";
import s from './Main.module.css'

const Main = () => {
    const {newsArr} = useMainStore()
    return (
        <>
            <AddNewNews/>
            <div className={s.previewWrapper}>
                {newsArr?.map(m => <NewsPreview key={m.id} data={m}/>)}
            </div>

        </>
    );
};

export default Main;