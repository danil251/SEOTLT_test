import React from 'react';
import s from './Input.module.css'

const Input = ({value, setValue, maxLength, title, type = 0, placeholder}) => {

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.title}>{title}</div>
                {maxLength && <div className={s.length}>{value?.length}/{maxLength}</div>}
            </div>
            {type ? <input placeholder={placeholder} className={s.input} value={value} onChange={setValue} maxLength={maxLength}/> :
                <textarea placeholder={placeholder} className={s.textarea} value={value} onChange={setValue} maxLength={maxLength}/>}
        </div>
    );
};

export default Input;