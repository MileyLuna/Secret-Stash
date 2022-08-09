//MUI
import TextField from '@mui/material/TextField';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashInstructionList({list}){

    const [update, setUpdate] = useState(false);

    const [step, setStep] = useState('');
    const [text, setText] = useState('');

    return(
        <>
        <p>{list.step_num}. {list.text}</p>
        </>
    )
}

export default MyStashInstructionList;