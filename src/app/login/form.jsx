'use client'

import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"
import { UserLogin } from "./action"

function SubmitButton(){
    const { pending } = useFormStatus()
    
    return(
        <>
            <button type="submit" disabled={pending}>
                {pending &&
                    <h1>Verifying...</h1>
                }
                {!pending &&
                    <h1>Login</h1>
                }
            </button>
        </>
    )
}

export default function LoginForm(){
    const [state, action] = useFormState(UserLogin, "null")

    return (
        <>
            <form action={action}>
                <input type="text" name="username" placeholder="username" required/>
                <input type="text" name="password" placeholder="password" required/>
                <SubmitButton></SubmitButton>
                <h1>{state.message}</h1>
            </form>
        </>
    )
}
