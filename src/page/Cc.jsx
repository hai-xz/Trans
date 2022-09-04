import React,{useRef} from 'react'
import './Cc.css'
import defimg from '../assets/da397d49b16d003fd542568f29d9716a.jpg'
import Trans from './comp/Trans'
import { useNavigate } from 'react-router-dom'

export default function Cc() {

  const ref=useRef()
  const navigate=useNavigate()

  return (
    <div className='cc'>
      <Trans>
        <div className='ccc' ref={ref} key={456}>
          <img src={defimg} onClick={()=>navigate('/d')} />
          <p>昵称:大白</p>
        </div>
      </Trans>
      <button onClick={()=>navigate('/')}>跳转</button>
    </div>
  )
}
