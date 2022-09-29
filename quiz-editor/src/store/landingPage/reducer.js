import { GET_QUIZS ,GET_ONE_QUIZS,SET_QUIZ_ID} from './actionTypes'

const INIT_STATE = {
  quizs: [],
  onequiz:{},
  quiz_id:0,

}

const quizsCreator = (state = INIT_STATE, action) => {

  switch (action.type) {
    case GET_QUIZS:
      return {
        ...state,
        quizs: action.payload,
      }
      case GET_ONE_QUIZS:
        return {
          ...state,
          onequiz: action.payload,
        }
        case SET_QUIZ_ID:
        return {
          ...state,
          quiz_id: action.payload,
        }

    default:
      return state
  }
}

export default quizsCreator
