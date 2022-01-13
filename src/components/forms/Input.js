import React,{useState} from 'react'
import Icon from '../Icon'

const Input = ({type, error, name, label, onChange, value, className, ...props}) => {
    const [see, setSee] = useState(false)
    
    return (
        <label className='input-wrapper'>
            <span className='label'>{label}</span>
            <input {...props} type={type === 'password' && see? 'text': type === 'password' && !see? 'password': type } onChange={onChange} value={value} name={name} />
            <p className='error-msg'>{error? error: null}</p>
            {type === 'password'? 
                <button type='button' onClick={()=>setSee(!see)} className='toggle-password'> 
                    <Icon svg={`${see? 'eye':'eye-off'}`}/>
                </button>:
                null
            }
        </label>
    )
}

export default Input
