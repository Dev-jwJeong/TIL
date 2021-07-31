import { createAction, handleActions } from 'redux-actions';

const INCREASE  = 'counter/INCREASE';
const DECREASE = 'conter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//redux-thunk는 액션 생성 함수에서 일반 액션 객체가 아닌 함수를 반환
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    },1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    },1000);
};

const initialState = 0;

const counter = handleActions({
    [INCREASE] : state => state + 1,
    [DECREASE] : state => state - 1
},initialState);

export default counter;