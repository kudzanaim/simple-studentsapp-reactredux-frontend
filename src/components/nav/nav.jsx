import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export const Nav = (props)=>{
    const [State, setState] = useState(0);

    useEffect(()=>{

    }, [])

    return (
        <div className="nav">
          
                <Link to="/"><div className="navitem" >View All Students</div></Link>
                <Link to="/search/first"><div className="navitem" >Search FirstName</div></Link>
                <Link to="/search/last"><div className="navitem" >Search LastName</div></Link>
           
        </div>
    )
}