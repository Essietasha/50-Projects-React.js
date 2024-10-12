import React from 'react';
import classes from './UserHome.module.css';
import Movies from '../pages/Movies';

const UserHome = () => {

  return (
    <>
    <div className={classes.divImgCont} >
        <div className={classes.cont} >
            <p className={classes.title} >REBEL BRIDGE</p>

            <p className={classes.description} >
                A taught thriller that sees a former military hand-to-hand combat expert take on the corrupt police department of a small southern town. While the fights, shoot-outs, and plot resolution are pure Hollywood, the inciting incident is based pretty firmly in the reality of civil forfeiture.
            </p>

            <button className={classes.play} >
              Play
            </button>
            
            <button className={classes.more} >
              More Info
            </button>
        </div>
    </div>
    <Movies />
    </>
  )
}

export default UserHome;



// import React from 'react';
// import classes from './UserHome.module.css';
// import Movies from '../pages/Movies';

// const UserHome = () => {
//   return (
//     <>
//     <div className={classes.divImgCont} >
//         <div className={classes.cont} >
//             <p className={classes.title} >REBEL BRIDGE</p>
//             <p className={classes.description} >A taught thriller that sees a former military hand-to-hand combat expert take on the corrupt police department of a small southern town. While the fights, shoot-outs, and plot resolution are pure Hollywood, the inciting incident is based pretty firmly in the reality of civil forfeiture.</p>
//             <button className={classes.play} >Play</button>
//             <button className={classes.more} >More Info</button>
//         </div>
//     </div>
//     <Movies />
//     </>
//   )
// }

// export default UserHome;