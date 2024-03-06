import { useState } from 'react'
import Card from "./Card";
import emojipedia from '../emojipedia';
import "./App.css"


function App() {

  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          {emojipedia.map((emoji) =>
            <Card
              key={emoji.id}
              id={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
          )}
        </dl>
      </div>
    </>
  )
}

export default App
