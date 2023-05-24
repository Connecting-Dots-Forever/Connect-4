import { log } from 'console';
import React, { useState } from 'react'

import styles from "styles/Game.module.css";

function Game() {

  const [turn, setTurn] = useState(1);
  const [ds, setDs] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 1, 0, 1, 2]
  ]);
  const [hoverTop, setHoverTop] = useState(
    [1, 0, 0, 0, 0, 0, 0]
  )

  const bgOnTop = (e) => {
    // e.target.style.background = 'red';
    console.log(e.target.id.charAt(2), "on");
    console.log(hoverTop);
    
    const col = e.target.id.charAt(2);
    let newTop = hoverTop;
    newTop[parseInt(col)] = 1;
    setHoverTop(newTop)
    
  }

  const bgOffTop = (e) => {
    // e.target.style.background = 'white';
    // console.log(e.target.id.charAt(0), "off");
    const col = e.target.id.charAt(2);
    let newTop = hoverTop;
    newTop[parseInt(col)] = 0;
    setHoverTop(newTop)
  }

  return (<>
    <div className='container m-4 lg:mx-auto md:mx-auto xl:mx-auto'>Game</div>
    <div className="mt-5">

      <div className={`${styles.grTop}`}>
        {hoverTop.map((col, i)=>(
          <div className={styles.cellTop}
          key={i}
          style={{ "backgroundColor": (hoverTop[i]) ? ((turn === 1) ? "red" : "yellow") : "white" }}
          ></div>
        ))}
      </div>
      
      <div className={styles.gr}>

        {ds.map((row, x) => {
          return(

            row.map((cell, y) => {
              return (<div className={styles.cell}
                style={{ "backgroundColor": (ds[x][y]) ? ((ds[x][y] === 1) ? "red" : "yellow") : "white" }}
                onMouseOver={bgOnTop}
                onMouseLeave={bgOffTop}
                id={`${x}-${y}`}
                key={`${x}-${y}`}
              ></div>)
            })
          )
        })}
      
      </div>
    </div>
  </>
  )
}

export default Game