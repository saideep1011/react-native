import React ,{useReducer}from 'react'
import { View, Text ,Button} from 'react-native'
const reducer = (state, action) =>{
    //action = {count :number}
    //action= {type:'icrement|| decrement, payload :10}
switch(action.type){
    case 'increment':
        return {...state, count:state.count+action.payload};
        case 'decrement':
            return{...state, count:state.count-action.payload};
};


};
export default function CounterScreen() {
    const [state, dispatch]= useReducer(reducer, {count:0});
    return (
        <View>
        < Button title='increase' 
        onPress={() =>{
         dispatch({type:'increment', payload:1})
        }}/>
         < Button title='decrease' 
        onPress={() =>{
        dispatch({type:'decrement', payload:1})
        }}/>
        <Text>current count {state.count}</Text>
        </View>
    )
}
