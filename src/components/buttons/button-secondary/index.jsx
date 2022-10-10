import React from 'react';
import style from './index.module.scss';


export const ButtonSecondary = ({text}) => {
    return(
        <button className={style.button}>
            {text}
        </button>
    )
}