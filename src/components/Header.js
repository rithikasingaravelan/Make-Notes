import React from "react";


const Header = ({ handleToggleDarkMode}) => {
    return(
       <div className="header">
        <h1>Make Notes</h1>
        <button onClick ={()=> 
            handleToggleDarkMode(
                (previousDarkmode)=> !previousDarkmode
                )
                } 
                className='save'>Change Mode
        </button>
       </div> 
    )
}

export default Header;