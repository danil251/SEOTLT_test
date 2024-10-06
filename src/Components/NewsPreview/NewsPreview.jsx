import React from 'react';
import s from './NewsPreview.module.css'
import Eye from "../../Assets/Img/Eye.png";
import {NavLink} from "react-router-dom";

const NewsPreview = ({data}) => {

    return (
        <NavLink to={`/news/${data.id}`} className={s.container}>
            <div className={s.mask}/>
            <div className={s.imgWrapper}>
                <img className={s.img} src={data.url} alt="Preview"/>
            </div>
            <div className={s.mainWrapper}>
                <div className={s.title}>{data.title}</div>
                <div className={s.text}>{data?.text.length > 30? data.text.slice(0, 30) + '...' : data.text}</div>
            </div>
            <div className={s.infoWrapper}>
                {data.viewed? <div className={s.viewed}>
                    <img src={Eye}/>
                </div> : <div/>}
            </div>
        </NavLink>
    );
};

export default NewsPreview;