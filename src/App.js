import React from 'react'
import Form from './Form'
import Resultform from './Resultform'
import css from './app.module.css'

const App = () => {
    return (
        <>
            <h1>重量換算アプリ</h1>
            <p>食品の大さじ・小さじの量を重量（ｇ）に換算します。</p><br></br>
            <p>...</p>
            <div className={css.wrap}>
                <div className={css.item}>しょうゆ　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g   </div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g   </div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <p>砂糖　　　　　大さじ　　　小さじ　　　　⇒　　　　ｇ</p>
            <p>酒　　　　　　大さじ　　　小さじ　　　　⇒　　　　ｇ</p>
        </>

    )
}

export default App