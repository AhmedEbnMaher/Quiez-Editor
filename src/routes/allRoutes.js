
// import pages
import IndexPage from '../pages/index/indexPage'
import NewQuiz from '../pages/newQuiz'
import QuezAnswer from '../pages/Quez-Answer'
import QuizEdit from '../pages/quiz-edit'



const userRoutes = [
  { path: '/quizs/index', component: IndexPage },
  { path: '/quizs/new-quiz', component: NewQuiz },
  { path: '/quizs/quez-answer', component: QuezAnswer },
  { path: '/quizs/quez-edit', component: QuizEdit },

]


export {userRoutes}
