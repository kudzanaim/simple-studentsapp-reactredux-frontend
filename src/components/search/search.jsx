import React, {useState, useEffect} from 'react';
import {useParams } from "react-router-dom";

export const Search = ({props})=>{
    const [State, setState] = useState({lastname:null, firstname:null});
    const params = useParams();

    useEffect(()=>{
       
    }, [props])

    const searchvalue = ()=>{
        const value = document.querySelector('.searchfld').value;
        if(params.id == "first"){
            props.searchFirst( value )
        }else if(params.id == "last"){
            props.searchLast( value )
        }
    }

    console.log(props.results)

    return (
      <div className="search">
          {
               ( params.id == "last" )? <div><h4>Search Last Name</h4></div> : <div><h4>Search First Name</h4></div>
          }
          <div className="srchinn">
              <input className="searchfld" placeholder={`Type ${( params.id == "last" )? 'Lastname':'Firstname'} to search`} />
          </div>
          <div className="btnhold"><button className="serchbtn" onClick={()=>searchvalue()} >Search</button></div>
          {
                (params.id=="last")? 
                <div className="searchresult">
                    {
                        ( !props.results  )? <div className="results">No Results to View(l)</div> : 
                        <div className="results">
                            <div className="studentitm">Firstname: {Object.values(props.results)[0].firstname}, Lastname: {
                           Object.values(props.results)[0].lastname}</div>
                        </div>
                    }
                </div>
                : 
                <div className="searchresult">
                    {
                        ( !props.results )? 
                        <div className="results">No Results to View(f)</div> 
                        : 
                        <div className="results">
                           <div className="studentitm">Firstname: {Object.values(props.results)[0].firstname}, Lastname: {
                           Object.values(props.results)[0].lastname}</div>
                        </div>
                    }
                </div>
          }
      </div>
    )
}