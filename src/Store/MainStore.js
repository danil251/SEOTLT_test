import {create} from "zustand";

export const useMainStore = create((set, get) => ({
    newsArr: [],
    fetchNewsArr: () => {
        const data = localStorage.getItem('newsArr')
        set({newsArr: JSON.parse(data)})
    },
    addNewNews: (data) => {
        const currentNewsArr = get().newsArr
        if (currentNewsArr) localStorage.setItem('newsArr', JSON.stringify([...currentNewsArr, data]))
        else localStorage.setItem('newsArr', JSON.stringify([data]))
        get().fetchNewsArr()
    },
    deleteNews: (id) => {
        const currentNewsArr = get().newsArr.filter(f => f.id !== id)
        localStorage.setItem('newsArr', JSON.stringify(currentNewsArr))
        get().fetchNewsArr()
    },
    updateNews: (data) => {
        const currentNewsArr = get().newsArr.map(m => m.id === data.id ? data : m)
        localStorage.setItem('newsArr', JSON.stringify(currentNewsArr))
        get().fetchNewsArr()
    }
}))