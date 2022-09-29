// @flow
import React ,{useEffect,useState}from 'react';
import { Row, Col, Label , Input, Form, FormGroup } from "reactstrap";

 function QuizQuestions({questionNumber,setQuestionOne,setQuestionTwo,
    setQuestionThree,setQuestionFour,
    setQuestionFive,
    setTabeTwo,setTabeTree,
    setTabeFour,setTabeFive,
    setTabeSix,questionData}) {
     const [newQuestion,setNewQuestion]=useState(questionData?questionData.questionvalue:'')
     const [answerOne,setAnswerOne]=useState(questionData?questionData.answers[0].text:'')
     const [answerTwo,setAnswerTwo]=useState(questionData?questionData.answers[1].text:'')
     const [answerThree,setAnswerThree]=useState(questionData?questionData.answers[2].text:'')
     const [answerFour,setAnswerFour]=useState(questionData?questionData.answers[3].text:'')
     const [falseFeadBack,setFalseFeadBack]=useState('')
     const [TrueFeadBack,setTrueFeadBack]=useState('')
     const [questionAnswer,setQuestionAnswer]=useState('Answer One')
     const [answerOneIsTrue,setAnswerOneIsTrue]=useState(true)
     const [answerTwoIsTrue,setAnswerTwoIsTrue]=useState(false)
     const [answerThreeIsTrue,setAnswerThreeIsTrue]=useState(false)
     const [answerFourIsTrue,setAnswerFourIsTrue]=useState(false)
   
     
     useEffect(()=>{
       if(questionAnswer ==='Answer One')
       {
        setAnswerOneIsTrue(true)
        setAnswerTwoIsTrue(false)
        setAnswerThreeIsTrue(false)
        setAnswerFourIsTrue(false)
       }else if(questionAnswer === 'Answer Two'){
        setAnswerOneIsTrue(false)
        setAnswerTwoIsTrue(true)
        setAnswerThreeIsTrue(false)
        setAnswerFourIsTrue(false)
       }else if(questionAnswer === 'Answer Three')
       {
        setAnswerOneIsTrue(false)
        setAnswerTwoIsTrue(false)
        setAnswerThreeIsTrue(true)
        setAnswerFourIsTrue(false)
       }else{
        setAnswerOneIsTrue(false)
        setAnswerTwoIsTrue(false)
        setAnswerThreeIsTrue(false)
        setAnswerFourIsTrue(true)
       }

     },[questionAnswer])
   
    const question={id:1,
        questionvalue:newQuestion,
        number:`question ${questionNumber}`,  
         answers: [
        {
          
          istrue:answerOneIsTrue,
          text: answerOne,
          feadback:answerOneIsTrue? TrueFeadBack:falseFeadBack
          
        },
        {
          istrue: answerTwoIsTrue,
          text: answerTwo,
          feadback:answerTwoIsTrue? TrueFeadBack:falseFeadBack
        },
        {
          istrue: answerThreeIsTrue,
          text: answerThree,
          feadback:answerThreeIsTrue? TrueFeadBack:falseFeadBack
        },
        {
          istrue: answerFourIsTrue,
          text: answerFour,
          feadback:answerFourIsTrue? TrueFeadBack:falseFeadBack
        }
      ]
      
      }

      useEffect(()=>{
        if(questionNumber===1 && 
            newQuestion.length>0 &&
            answerOne.length>0&&
            answerTwo.length> 0 &&
            answerThree.length> 0 && 
            answerFour.length > 0 && 
            falseFeadBack.length> 0 &&
            TrueFeadBack.length >0 ){
               
                setQuestionOne(question)
                setTabeTwo(true)
            }else if (questionNumber===2 && 
                newQuestion.length>0 &&
                answerOne.length>0&&
                answerTwo.length> 0 &&
                answerThree.length> 0 && 
                answerFour.length > 0 && 
                falseFeadBack.length> 0 &&
                TrueFeadBack.length >0 )
                {
                 setQuestionTwo(question)
                 setTabeTree(true)   
                }
                else if (questionNumber===3 && 
                    newQuestion.length>0 &&
                    answerOne.length>0&&
                    answerTwo.length> 0 &&
                    answerThree.length> 0 && 
                    answerFour.length > 0 && 
                    falseFeadBack.length> 0 &&
                    TrueFeadBack.length >0 )
                    {
                     setQuestionThree(question)
                     setTabeFour(true)   
                    }else if (questionNumber===4 && 
                        newQuestion.length>0 &&
                        answerOne.length>0&&
                        answerTwo.length> 0 &&
                        answerThree.length> 0 && 
                        answerFour.length > 0 && 
                        falseFeadBack.length> 0 &&
                        TrueFeadBack.length >0 )
                        {
                         setQuestionFour(question)
                         setTabeFive(true)   
                        }
                        else if (questionNumber===5 && 
                            newQuestion.length>0 &&
                            answerOne.length>0&&
                            answerTwo.length> 0 &&
                            answerThree.length> 0 && 
                            answerFour.length > 0 && 
                            falseFeadBack.length> 0 &&
                            TrueFeadBack.length >0 )
                            {
                             setQuestionFive(question)
                             setTabeSix(true)   
                            }

     },[questionNumber,newQuestion,answerOne,answerTwo,answerThree,answerFour,falseFeadBack,TrueFeadBack])
  return (
    <div>
        <Form>
           <Row>
             <Col lg="12">
              <FormGroup>
                <Label for="basicpill-firstname-input14"> Question {questionNumber}</Label>
                  <Input type="text"
                  value={newQuestion}
                  onChange={(e)=>{
                    setNewQuestion(e.target.value)
                  }}
                   maxLength="200"
                    className="form-control" 
                    id="basicpill-firstname-input14"
                    
                    />
                     </FormGroup>
                        </Col>
                          <Col lg="6">
                         <FormGroup>
                          <Label for="basicpill-lastname-input15">Answer one</Label>
                          <Input 
                          type="text" 
                          maxLength="50" 
                          className="form-control"
                           id="basicpill-firstname-input15"
                           value={answerOne}
                           onChange={(e)=>{
                             setAnswerOne(e.target.value)
                           }}
                           />
                             </FormGroup>
                           </Col>

                           <Col lg="6">
                         <FormGroup>
                          <Label for="basicpill-lastname-input16">Answer Two</Label>
                          <Input 
                          type="text"
                           maxLength="50" 
                           className="form-control" 
                           id="basicpill-firstname-input16"
                           value={answerTwo}
                           onChange={(e)=>{
                             setAnswerTwo(e.target.value)
                           }}
                           />
                             </FormGroup>
                           </Col>
                           <Col lg="6">
                         <FormGroup>
                          <Label for="basicpill-lastname-input17">Answer Three</Label>
                          <Input 
                          type="text"
                           maxLength="50" 
                           className="form-control"
                            id="basicpill-firstname-input17"
                            value={answerThree}
                            onChange={(e)=>{
                              setAnswerThree(e.target.value)
                            }}
                            />
                             </FormGroup>
                           </Col>

                           <Col lg="6">
                         <FormGroup>
                          <Label for="basicpill-lastname-input18">Answer Four</Label>
                          <Input 
                          type="text" 
                          maxLength="50" 
                          className="form-control"
                           id="basicpill-firstname-input18"
                           value={answerFour}
                           onChange={(e)=>{
                             setAnswerFour(e.target.value)
                           }}
                           />
                             </FormGroup>
                           </Col>
                            </Row>

                             <Row>
                            <Col lg="6">
                                 <FormGroup>
                                  <Label for="basicpill-phoneno-input19">Feadback For True Answer</Label>
                                  <Input 
                                  type="text" 
                                  maxLength="100"
                                   className="form-control"
                                    id="basicpill-firstname-input19"
                                    value={TrueFeadBack}
                                    onChange={(e)=>{
                                      setTrueFeadBack(e.target.value)
                                    }}
                                    />
                                 </FormGroup>
                            </Col>
                                 <Col lg='6'>
                                 <FormGroup>
                                  <Label for="basicpill-phoneno-input19">Feadback For False Answer</Label>
                                  <Input 
                                  type="text" 
                                  maxLength="100" 
                                  className="form-control" 
                                  id="basicpill-firstname-input19"
                                  value={falseFeadBack}
                                  onChange={(e)=>{
                                    setFalseFeadBack(e.target.value)
                                  }}
                                  />
                                 </FormGroup>
                                 </Col>                          
                             </Row>
                             <Row>
                             <Col lg='6'>
                             <Label for="basicpill-ph
                             oneno-input19">True Answer</Label>
                                            <div className="col-md-10" id='basicpill-phoneno-input19'>
                                                <select className="form-control" 
                                                  value={questionAnswer}
                                                  onChange={(e)=>{
                                                    setQuestionAnswer(e.target.value)
                                                  }}
                                                >
                                                    <option>Answer One</option>
                                                    <option>Answer Two</option>
                                                    <option>Answer Three</option>
                                                    <option>Answer Four</option>
                                                </select>
                                            </div>
                                 </Col>                          
                             </Row>
                         </Form>
    </div>
  );
};

export default QuizQuestions