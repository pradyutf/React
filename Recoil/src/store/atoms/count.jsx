import {atom, atomFamily, selector} from "recoil"





const TODOS = [{
    id: 1,
    desc: "hello1"
},
{
    id: 2,
    desc: "hello2"
},
{
    id: 2,
    desc: "hello3"
}]


export const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export const evenSelector = selector({
    key: 'evenSelector',
    get: (props)=>{
        const count = props.get(countAtom)
        return count%2;
    }
});


export const todoAtomsFamily = atomFamily({
    key: 'todoAtomsFamily',
    default: (id)=>{
        return TODOS.find((ele) => ele.id === id)
    }
})