import { useReducer, useEffect, useRef } from "react";

function useFetch(url) {

const cache = useRef({});
const ACTIONS = {
    'LOADING': 'loading',
    'ERROR': 'error',
    'FETCHED': 'fetched'
}

const initialState = {
    response: null,
    loading: false,
    error: null,
}



function reducer(state, action){
    switch(action.type) {
        case 'loading': 
            return {...state, loading: true};
        case 'fetched':
            return {...state, loading: false, response: action.payload};
        case 'error': 
            return {...state, loading: false, response: action.payload};
        default:
            return state;

    }
}




const [state, dispatch]= useReducer(reducer, initialState);

useEffect(  () => {
    let cancelRequest = false;
    if(!url) return;

    
        const fetchData = async () => {
            dispatch({type: ACTIONS.LOADING});
            if(cache.current[url]) {

                const data = cache.current[url];
                dispatch({type: ACTIONS.FETCHED, payload: data});


            } else {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const data = await response.json();
                    cache.current[url] = data;
                    if(cancelRequest) return;

                    dispatch({type: ACTIONS.FETCHED, payload: data});
                } catch(error) {
                    if (cancelRequest) return;
                    dispatch({type: ACTIONS.ERROR, payload: error.message});
                }
            }
        }

        fetchData();

        return function cleanup(){
            cancelRequest = true;
        }
}, [url]) 



  return state;
}

export default useFetch