
// import pages
import IndexPage from '../pages/index/indexPage'
import NewQuiz from '../pages/newQuiz'
import QuezAnswer from '../pages/Quez-Answer'



const userRoutes = [
  { path: '/quizs/index', component: IndexPage },
  { path: '/quizs/new-quiz', component: NewQuiz },
  { path: '/quizs/quez-answer', component: QuezAnswer },

]


export {userRoutes}
