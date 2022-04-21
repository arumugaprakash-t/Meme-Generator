import React from "react"


export default function Meme(){


    return (
        <div className="main-form" >
            <form className="memeform">
               <input className="meme-input" placeholder="top text" type="text"/>
               <input className="meme-input" placeholder="bottom text" type="text"/>
               <button className="meme-button">Get new meme image</button>
            </form>
        </div>
    )

}