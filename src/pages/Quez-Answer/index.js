
import  React,{useEffect,useCallback,useState} from 'react';
import {useSelector ,useDispatch} from 'react-redux'
import { getQuizs } from '../../store/landingPage/actions';
import { Col, Row } from "reactstrap";
import {useHistory} from 'react-router-dom'
import './index.scss'
function QuezAnswer(props) {
const Quizs = useSelector((state)=>state)
const [feadBack,setFeadBack]= useState([])
const [feadBackArry,setFeadBackArry]= useState([])
const [answerValue,setAnswerValue]= useState([])
const myArray=[]
const history=useHistory()
const dispatch = useDispatch()
const setUserId = useCallback((payload) => {
    dispatch({
        type: 'SET_QUIZ_ID',
        payload,
      })
  }, []);
    useEffect(()=>{
        
        if(history.location.query !== undefined)
        setUserId(history.location.query)
        dispatch(getQuizs())
        if(history.location.query === undefined)
        history.push('/quizs/index')
    },[])
  return (
  
    <div className='wraper'>
   {Quizs.quizsCreator.quiz_id&&
   Quizs.quizsCreator.quizs[Quizs.quizsCreator.quiz_id-1].questions
   .map((question,idx)=>(
   <div key={idx} className='container'>
    <div className={'mb-5'}>
    <h1 className='question'>{question.number}: {question.questionvalue}</h1>
    {question?.answers.map((answer,index)=>(
        <div key={index}>
         
         <Col >
           <Row>
             <Col  className="ml-auto">
               <div className="custom-control custom-radio mb-3">
                 <input 
                 type="radio" 
                 onClick={()=>{
                    
                    if(!feadBackArry.includes(idx)&&idx===feadBack.length )
                         {
 
                    setFeadBackArry([...feadBackArry,idx])
                    
                    setFeadBack([...feadBack,answer.feadback]) 
                    setAnswerValue([...answerValue,answer.istrue])
                      }else{
                        alert('not allowed to answer question twice and this wont change the result')
                      }
                   
                 }}
                 id={!feadBackArry.includes(idx)&&idx===feadBack.length?`customRadio1${index}${answer.text}`:null}
                  name={`customRadio${idx}`} 
                  className="custom-control-input" />
                 <label
                  className="custom-control-label"
                   htmlFor={`customRadio1${index}${answer.text}`}>
                    {answer.text}
                    </label>
               </div>
               
             </Col>
          </Row>
         </Col>
        </div>
      

    )

    ) 
    }
    <div className={answerValue[idx]?'bg-success text-white fead-back':'bg-danger text-white fead-back'}>

   <span> {feadBackArry[idx]===idx? feadBack[idx] :null}</span>
  
     </div>
   </div>
   </div>
   ))}

    </div>
  );
};
export default QuezAnswer