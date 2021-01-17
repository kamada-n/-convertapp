import React, { Component } from 'react'
import Form from './Form'
import css from './app.module.css'

const App = () => {
    return (
        <>
            <h1>重量換算アプリ</h1>
            <p>食品の大さじ・小さじの量を重量（ｇ）に換算します。</p><br></br>
            <p>...</p>
            <div className={css.wrap}>
                <Form/>
            </div>
            {/* <div className={css.wrap}>
                <div className={css.item}>酒　　　　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>酢　　　　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>しょうゆ　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>みそ　　　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>食塩　　　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>上白糖（砂糖）　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>油　　　　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>小麦粉・片栗粉　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>マヨネーズ　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>トマトケチャップ　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>カレー粉　　　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>粒マスタード　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>豆板醤・甜麺醤　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>コチュジャン　　　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div>
            <div className={css.wrap}>
                <div className={css.item}>オイスターソース　大さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>小さじ</div>
                <div className={css.item}><Form /></div>
                <div className={css.item}>g</div>
                <div className={css.item}>⇒</div>
                <div className={css.item}><Resultform /></div>
                <div className={css.item}>g</div>
            </div> */}
        </>

    )
}

export default App