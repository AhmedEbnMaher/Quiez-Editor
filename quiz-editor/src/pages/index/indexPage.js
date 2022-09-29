import React,{useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getQuizs} from '../../store/landingPage/actions'
import Quiz from '../../components/quiz'
import './indexPage.scss'

const IndexPage = props => {
  const dispatch = useDispatch()
  const Quizs = useSelector((state)=>state.quizsCreator.quizs)

  useEffect(()=>{
dispatch(getQuizs())
  },[])

  return (
  <div className='container'>
  <div className='inner-content'>
    
     <Quiz  Quiz={Quizs} /> 

    
   </div>
  </div>
  )
}

export default IndexPage
