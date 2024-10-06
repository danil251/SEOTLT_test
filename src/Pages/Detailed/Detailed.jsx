import React, {useEffect, useMemo, useState} from 'react';
import s from './Detailed.module.css'
import {useMainStore} from "../../Store/MainStore";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import Trash from "../../Assets/svg/Trash";
import Pen from "../../Assets/svg/Pen";
import Modal from "../../Components/Modal/Modal";
import Input from "../../Components/Input/Input";

const Detailed = () => {
    const {newsArr, updateNews, deleteNews} = useMainStore()
    const navigate = useNavigate();
    const {id} = useParams()
    const [deleteModal, setDeleteModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const filterNewsArr = useMemo(() => newsArr.find(f => f.id === id), [newsArr])
    const [newNews, setNewNews] = useState({
        title: filterNewsArr?.title,
        text: filterNewsArr?.text,
        url: filterNewsArr?.url,
    })

    useEffect(() => {
        if (newsArr && filterNewsArr &&  !filterNewsArr?.viewed) {
            updateNews({...filterNewsArr, viewed: true})
        }
    }, [newsArr])


    const deleteHandler = () => {
        deleteNews(filterNewsArr.id)
        navigate('/')
    }
    const updateHandler = () => {
        updateNews(Object.assign(filterNewsArr, newNews))
        setUpdateModal(false)
    }

    return (
        <>
            <div className={s.container}>
                <img className={s.img} src={filterNewsArr?.url} alt=""/>
                <div className={s.wrapper}>
                    <NavLink to={'/'} className={s.nav}>&lt; Назад</NavLink>
                    <div className={s.svgWrapper}>
                        <div onClick={() => setUpdateModal(true)}><Pen/></div>
                        <div onClick={() => setDeleteModal(true)}><Trash/></div>
                    </div>

                </div>
                <div className={s.contentWrapper}>
                    <h1 className={s.title}>{filterNewsArr?.title}</h1>
                    <div className={s.text}>{filterNewsArr?.text}</div>
                </div>

            </div>

            <Modal active={deleteModal} setActive={setDeleteModal}>
                <div className={s.modalWrapper}>
                    <h2>Вы точно хотите удалить нвоость?</h2>
                    <div className={s.btnWrapper}>
                        <button onClick={deleteHandler}>Да</button>
                        <button onClick={() => setDeleteModal(false)}>Нет</button>
                    </div>
                </div>
            </Modal>

            <Modal active={updateModal} setActive={setUpdateModal}>
                <Input placeholder={'Заполните заголовок'} value={newNews.title}
                       setValue={(e) => setNewNews({...newNews, title: e.target.value})} maxLength={30}
                       title={'Заголовок'} type={1}/>
                <Input placeholder={'Введите url любой картинки из интернета'} value={newNews.url}
                       setValue={(e) => setNewNews({...newNews, url: e.target.value})} title={'Url картинки'} type={1}/>
                <Input placeholder={'Заполните описание'} value={newNews.text}
                       setValue={(e) => setNewNews({...newNews, text: e.target.value})} title={'Описание'} type={0}
                       maxLength={300}/>
                <div className={s.btnWrapper}>
                    <button className={s.btn} onClick={updateHandler}>Сохранить</button>
                    <button className={s.btn} onClick={() => setUpdateModal(false)}>Отмена</button>
                </div>
            </Modal>
        </>
    );
};

export default Detailed;