import React,{useRef} from 'react'
import defimg from '../assets/da397d49b16d003fd542568f29d9716a.jpg'
import './Dd.css'
import Trans from './comp/Trans'
import { useNavigate } from 'react-router-dom'

export default function Dd() {

  const ref=useRef()
  const navigate=useNavigate()

  return (
    <div className='dd'>
      <Trans>
        <div className='ddd' ref={ref} key={456}>
          <img src={defimg} onClick={()=>navigate('/c')} />
          <p>昵称:大白</p>
        </div>
      </Trans>
    </div>
  )
}
