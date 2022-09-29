import {GET_QUIZS,GET_ONE_QUIZS,CREATE_QUIZ} from './actionTypes'
export function getQuizs() {
    return async dispatch => {
      const response = await fetch('http://localhost:3000/quizs/')
      let payload = await response.json()
  
        dispatch({
          type: GET_QUIZS,
          payload,
        })
      }}
      export const creatNewQuiz = val => {
        return async dispatch => {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(val),
          }
          const response = await fetch('http://localhost:3000/quizs', requestOptions)
          const payload = await response.json()
      
          dispatch({
            type: CREATE_QUIZ,
            payload,
          })
        }
      }
      export function getSetNewQuiz(quiz) {
       
        return async dispatch => {
          const response = await fetch(`http://localhost:3000/quizs/${id}`)
          let payload = await response.json()
    
            dispatch({
              type: GET_ONE_QUIZS,
              payload,
            })
          }}