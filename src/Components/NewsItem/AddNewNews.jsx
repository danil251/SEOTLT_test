import React, {useMemo, useState} from 'react';
import Add from "../../Assets/svg/Add";
import s from './NewsItem.module.css'
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import {useMainStore} from "../../Store/MainStore";
import uuid from "react-uuid";

const initNews = {
    title: '',
    text: '',
    url: '',
}
const AddNewNews = () => {
    const {addNewNews} = useMainStore()
    const [active, setActive] = useState(false)
    const [newNews, setNewNews] = useState(initNews)

    const save = () => {
        const obj = {
            id: uuid(),
            viewed: false,
            date: new Date()
        }
        addNewNews(Object.assign(newNews, obj))
        setActive(false)
        setNewNews(initNews)
    }

    const close = () => {
        setNewNews(initNews)
        setActive(false)
    }

    const disabled = useMemo(() => Object.values(newNews).every(value => value), [newNews])

    return (
        <>
            <div className={`${s.addContainer}`} onClick={() => setActive(true)}>
                <div className={s.mask}/>
                <Add/>
                <div className={s.add}>Добавить новость</div>
            </div>

            <Modal active={active} setActive={setActive}>
                <Input placeholder={'Заполните заголовок'} value={newNews.title}
                       setValue={(e) => setNewNews({...newNews, title: e.target.value})} maxLength={30}
                       title={'Заголовок'} type={1}/>
                <Input placeholder={'Введите url любой картинки из интернета'} value={newNews.url}
                       setValue={(e) => setNewNews({...newNews, url: e.target.value})} title={'Url картинки'} type={1}/>
                <Input placeholder={'Заполните описание'} value={newNews.text}
                       setValue={(e) => setNewNews({...newNews, text: e.target.value})} title={'Описание'} type={0}
                       maxLength={300}/>
                <div className={s.btnContainer}>
                    <button disabled={!disabled} className={s.btn} onClick={save}>Сохранить</button>
                    <button className={s.btn} onClick={close}>Отмена</button>
                </div>
            </Modal>
        </>
    );
};

export default AddNewNews;