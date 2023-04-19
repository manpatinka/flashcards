import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = ({
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            })
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
})

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions
export default topicsSlice.reducer