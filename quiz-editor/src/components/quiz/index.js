// @flow 
import  React  from 'react';
import './index.scss'
import {useHistory} from "react-router-dom";
import { Col, Card, CardBody, Media ,Badge} from "reactstrap";


const Quiz = ({Quiz}) => {
    console.log("Quiz",Quiz)
    const history =useHistory()
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    if(Quiz )
    return (
        <React.Fragment>
         {
             Quiz?.map((quiz, key) =>
                 <Col xl="4" sm="6" key={"_quiz_" + key} className='mt-4' >
                     <Card>
                         <CardBody>

                                 <Media className="overflow-hidden" body>
                                     <h6 className="text-truncate">Quiz Name: <span className='text-muted'>{quiz.title}</span></h6>
                                     <p className="text-muted mb-2"><span className='font-weight-bold mr-2'>Discription:</span>{quiz.description}</p>
                                     <p className="text-muted quiz-url"  onClick={()=>openInNewTab(quiz.url)}> <span className='font-weight-bold'>Url: </span>{quiz.url}</p>
                                 </Media>
                                 <div className="px-4 py-3 border-top">
                                    <ul className="list-inline mb-0">
                                    
                                        <li className="list-inline-item" >
                                            <span className='bottom-section'>Final Score: {quiz.finalscore}</span>
                                          
                                        </li>
                                        
                                        <li className="list-inline-item">
                                           <span className='bottom-section'>Creation Date: 12/3/2022</span> 
                                           
                                        </li>
                                        <li className="list-inline-item">
                                            <Badge className='p-2 start-quiz' color='primary' onClick={()=>{
                                                history.push( {pathname: `/quizs/quez-answer`,
                                                                 query: quiz.id,})
                                            }}>Start Quiz</Badge>
                                        </li>
                                    </ul>
                                </div>
                         </CardBody>
                 
                     </Card>
                 </Col>
             )
         }

     </React.Fragment>
   );

};
export default Quiz