import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actContent } from '../../redux/actions/ContentAction'
import './RadioButton.scss'

export default function RadioButton() {

    const [checked, setChecked] = useState({
        ['Khái niệm'] : true,
        ['Tính chất'] : true,
        ['Dạng bài tập'] : true,
        ['Phương pháp giải'] : true
    })
    const { contentChapter, contentChapter2 } = useSelector(state => state.ContentReducer)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name } = e.target
        setChecked({
            ...checked,
            [name] : !checked[name]
        })
        if(checked[`${name}`] === true){
            console.log('check', checked[`${name}`]);
            const arr = contentChapter?.map((item, index) => {
                return {...item, classify : item.classify.filter((item) => item.kind !== name)}
            })
            dispatch(actContent(arr))
        }else {
            // console.log('check', checked[`${name}`]);
            const arr = contentChapter2?.map((item) => {
                // console.log('find Index', item.classify?.findIndex((part) => part.kind === name));
                return item.classify?.find((part) => part.kind === name)
            })
            const indexArr = contentChapter2?.map((item) => {
                return item.classify?.findIndex((part) => part.kind === name)
            })
            // console.log('Index aray', indexArr);
            contentChapter?.map((item, index) => {
                return {...item, classify : item.classify[indexArr[index]] = arr[index]}
            })
            // console.log('content chapter', contentChapter);
            dispatch(actContent(contentChapter))
        }
    }

    return (
        <div className="radio">
            <div className="radio-item">
                <input type="checkbox" className="option-input radio" name="Khái niệm" checked={checked['Khái niệm']} onChange={handleChange} /> 
                <span>Khái niệm</span>
            </div>
            <div className="radio-item">
                <input type="checkbox" className="option-input radio" name="Tính chất" checked={checked['Tính chất']} onChange={handleChange}    />
                <span>Tính chất</span>
            </div>
            <div className="radio-item">
                <input type="checkbox" className="option-input radio" name="Dạng bài tập" checked={checked['Dạng bài tập']} onChange={handleChange}   />
                <span>Dạng bài tập</span>
            </div>
            <div className="radio-item">
                <input type="checkbox" className="option-input radio" name="Phương pháp giải" checked={checked['Phương pháp giải']} onChange={handleChange}  />
                <span>Phương pháp giải</span>
            </div>
        </div>
    )
}
