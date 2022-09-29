// @flow
import React ,{useEffect,useState}from 'react';
import { Row, Col, Label , Input, Form, FormGroup } from "reactstrap";

 function QuizDetails({
    setQuizScore,
    setQuizDescription,
    setQuizTitle,
    setQuizUrl,
    quizScore,
    quizTitle,
    quizUrl,
    quizDescription,
    setTabeOne}) {
  useEffect(()=>{
    
    if(quizDescription?.length >0 &&
        quizScore?.length > 0 &&
        quizTitle?.length > 0 && 
        quizTitle?.length > 0)
        {
            
            setTabeOne(true)
        }
  },[quizDescription,quizScore,quizTitle,quizTitle])

  return (

    <div>
        <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-firstname-input14">Quiz Name</Label>
                                                                    <Input 
                                                                    type="text" 
                                                                    value={quizTitle}
                                                                    maxLength="20" 
                                                                    className="form-control"
                                                                     id="basicpill-firstname-input14"
                                                                     onChange={(e)=>{
                                                                      setQuizTitle(e.target.value)
                                                                     }}
                                                                     />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-lastname-input15">Url</Label>
                                                                    <Input 
                                                                    type="text"
                                                                    value={quizUrl}
                                                                    placeholder='https//:www.youtube.com/your vedio link'
                                                                     className="form-control" 
                                                                     id="basicpill-lastname-input15"
                                                                     onChange={(e)=>{
                                                                        setQuizUrl(e.target.value)
                                                                     }}
                                                                     />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                  
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <Label for="basicpill-address-input2">Quiz Description</Label>
                                                                    <textarea
                                                                    value={quizDescription}
                                                                     id="basicpill-address-input2" 
                                                                     maxLength="100"
                                                                      className="form-control" 
                                                                      rows="2"
                                                                      onChange={(e)=>{
                                                                       setQuizDescription( e.target.value)
                                                                      }}
                                                                      ></textarea>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-phoneno-input16">Quiz Score</Label>
                                                                    <Input 
                                                                    value={quizScore}
                                                                    type="number" 
                                                                    className="form-control" 
                                                                    id="basicpill-phoneno-input16"
                                                                    onChange={(e)=>{
                                                                        setQuizScore( e.target.value)
                                                                       }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                           
                                                        </Row>
                                                    </Form>
    </div>
  );
};

export default QuizDetails