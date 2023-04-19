import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";



const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, topicId, name, cardIds } = action.payload
            state.quizzes[id] = {
                id: id,
                topicId: topicId,
                name: name,
                cardIds: cardIds
            }
        }
    }
})

export const addQuizActions = payload => {
    const { topicId, id } = payload;
    return (dispatch) => {
        dispatch( addQuiz( payload ) );
       dispatch( addQuizId( {quizId: id, topicId: topicId} ) );
    }
};

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer