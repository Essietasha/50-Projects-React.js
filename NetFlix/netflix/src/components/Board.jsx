import React from 'react';
import classes from './Board.module.css';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/watching');
  }

  return (
  <>
    <div className={classes.flex}>
      <div className={classes.container}>
        <h1>Unlimited Movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel Anytime.</p>
        <p className={classes.watch} >Ready to watch? Login now.</p>
        <form onSubmit={handleSubmit}>
          <div className={classes.loginForm}>
            <input type='text' placeholder='Name' />
            <input type='password' placeholder='Password' />
          </div>
          <button className={classes.btn} >Login</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Board;


// import React from 'react';
// import classes from './Board.module.css';
// import { useNavigate } from 'react-router-dom';

// const Board = () => {
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     navigate('/watching');
//   }

//   return (
//   <>
//     <div className={classes.flex}>
//       <div className={classes.container}>
//         <h1>Unlimited Movies, TV shows and more</h1>
//         <p>Watch anywhere. Cancel Anytime.</p>
//         <p className={classes.watch} >Ready to watch? Login now.</p>
//         <form onSubmit={handleSubmit}>
//           <div className={classes.loginForm}>
//             <input type='text' placeholder='Name' />
//             <input type='password' placeholder='Password' />
//           </div>
//           <button className={classes.btn} >Login</button>
//         </form>
//       </div>
//     </div>
//   </>
//   )
// }

// export default Board;