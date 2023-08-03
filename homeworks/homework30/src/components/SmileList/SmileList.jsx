import { DATA } from '../../constants/data.js'
import { SmileListItem } from './SmileListItem'
import { useState } from 'react'
import './SmileList.css'
import { Button } from '../Button'
import { Result } from '../Result'

DATA.map((item) => item.counter = 0)

export const SmileList = () => {
    const [smiles, setVote] = useState(DATA)
    const [winner, setWinner] = useState({
        id: '',
        title: '',
        image: 'res_icon.png',
        counter: 0 
    })

    const hendlerClick = (id) => {
        setVote(() => {
            return smiles.map((item) => 
            item.id === id ? { ...item, counter: item.counter + 1 } : item 
            )
        })
    }

    const showResults = () => {
        setWinner(() => {
            const NO_MATCH = {
                title: 'No Winner',
                image: 'res_icon.png'
            }
            return smiles.reduce((prev, cur) => cur?.counter === prev.counter ? NO_MATCH : cur?.counter > prev.counter ? cur : prev)
        })
    }

    return(
        <>
            <ul className="smileList">
                {smiles.map(( {id, title, image, counter}) => 
                    <SmileListItem 
                        key={ id }
                        id={ id } 
                        title={ title } 
                        img={ `images/${image}`}
                        counter={ counter }
                        hendlerClick={hendlerClick}
                        /> 
                        )}
            </ul>
            <Button hendlerClick={showResults}>{'Show Results'}</Button>
            <Result 
                text={ winner.title } 
                img={ `images/${winner.image}`} 
                title={ winner.title }  />
        </>
    )
}