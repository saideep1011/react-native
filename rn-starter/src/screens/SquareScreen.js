import React from 'react'
import { View, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter";
import { useReducer } from 'react';

const COlour_Increment=15;
const reducer =(state, action) =>{
    // state= {re :0, green:0, blue:0}
    //action = colortochange:red||blue||green , amounttochange:15||-15
    switch(action.ColourtoChange){
        case 'Red':
            return {...state, Red:state.Red+action.amount};
            case 'Green':
                return {...state, Green:state.Green+action.amount};

                case 'Blue':
                    return {...state, Blue:state.Blue+action.amount};
                    default:
                        return state;
    }

};

export default function SquareScreen() {
    const [state, dispatch]= useReducer(reducer, {Red:0, Green:0, Blue:0})
    const {Red, Green, Blue} = state;
    
    return (
        <View>
            
            <ColourCounter colour="Red" 
            onIncrease ={() =>  dispatch({ColourtoChange :'Red' ,amount :COlour_Increment}) }
            onDecrease = {() =>  dispatch({ColourtoChange :'Red' ,amount : -1*COlour_Increment})}/>
            <ColourCounter colour="Blue"
            onIncrease ={() => dispatch({ColourtoChange :'Blue' ,amount :COlour_Increment})}
            onDecrease = {() => dispatch({ColourtoChange :'Blue' ,amount :-1*COlour_Increment})}
            />
            <ColourCounter colour="Green"
            onIncrease ={() => dispatch({ColourtoChange :'Green' ,amount :COlour_Increment})}
            onDecrease = {() => dispatch({ColourtoChange :'Green' ,amount :-1*COlour_Increment})}/>
            <View style={{ height:100, width:100, backgroundColor:`rgb(${Red}, ${Green}, ${Blue})`}}/>
        </View>
    )
}
