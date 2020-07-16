import $ from 'jquery';
import _ from 'lodash';


// Action Types
export const GETALL = "GETALL";
export const SEARCHLAST = "SEARCHLAST";
export const SEARCHFIRST = "SEARCHFIRST";

// Get Home Data Functions:
export function getAllUsers(e) {
    return async function(dispatch){
        await $.get(`https://studentsapi-gcsusetqgq-uc.a.run.app/all`, function(data){
            dispatch({
                type: GETALL,
                payload:{
                    data:data,
                },
            })
        })
        
    }
};

// Search Last:
export function searchLast(lastname) {
    return async function(dispatch){
        await $.get(`https://studentsapi-gcsusetqgq-uc.a.run.app/search/l/?s=${lastname}`, function(data){
            dispatch({
                type: SEARCHLAST,
                payload:{
                    data:data.results.lastnames,
                },
            })
        })
        
    }
};
// Get Home Data Functions:
export function searchFirst(firstname) {
    return async function(dispatch){
        await $.get(`https://studentsapi-gcsusetqgq-uc.a.run.app/search/f/?s=${firstname}`, function(data){
            
            dispatch({
                type: SEARCHFIRST,
                payload:{
                    data:data.results.firstnames,
                },
            })
        })
        
    }
};
