import React from 'react'
import {BiHomeSmile ,BiStats,BiPlus,BiTime,BiBrightness} from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import './footer.scss'

const Footer = props => {
  const history = useHistory()
  return (
<div className='footer'>
  <div className='container'>
  <ul>
    
  <li className={props.pathName==='/quizs/index'?'active':''}   onClick={() => {
                  history.push('/quizs/index')
                }}><div className='icon-list'><BiHomeSmile/></div><span>Quizs List</span></li>
                 <li className={props.pathName==='/quizs/new-quiz'?'active':''} onClick={() => {
                  history.push('/quizs/new-quiz')
                }}><div className='icon-list'><BiPlus/></div><span>Add Quiz</span> </li>   
  </ul>
  </div>

</div>
  )
}

export default Footer
