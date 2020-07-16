import React, {useState, useEffect} from 'react';

export const Home = ({props})=>{
    useEffect(()=>{
        if(!props.all){
            props.getAllUsers()
        }
    },[props]);
    console.log(props);

    return (
      <div className="app">
          <h4>View All Students</h4>
          <div className="studentlist">
              {
                  ( !props.all )?<div>Loading list...</div> : 
                  Object.values(props.all).map((student)=>{return (
                      <div className="studentitm">Firstname: {student.firstname}, Lastname: {student.lastname}</div>
                  )})
              }
          </div>
      </div>
    )
}