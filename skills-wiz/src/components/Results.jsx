import React from 'react'
import DistressTolResults from './DistressTolResults'
import EmotionRegResults from './EmotionRegResults'
import InterEffectiveResults from './InterEffectiveResults'


const Results = (props) => {
    const {value} = props
    return (
        (
            value <= 35 ? <InterEffectiveResults /> :
            value >= 75 ? <DistressTolResults /> :
                          <EmotionRegResults />                    
        )
    )
}

export default Results
