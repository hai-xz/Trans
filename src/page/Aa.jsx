import React, { useRef } from 'react'
import defimg0 from '../assets/img3.jpg'
import defimg1 from '../assets/1de5159fb88f492a666a1976f5495f43.jpg'
import defimg2 from '../assets/a476b6f07a20a50b2594e2ba40431e8e.jpg'
import defimg3 from '../assets/d06fa633d8b87eb900f576a06d74c3a5.jpg'
import defimg4 from '../assets/da397d49b16d003fd542568f29d9716a.jpg'
import defimg5 from '../assets/fj2011950.jpg'
import defimg6 from '../assets/fje88b27550495d06a041a7854fcd07b8c.jpg'
import { useNavigate } from 'react-router-dom'
import './Aa.css'
import Trans from './comp/Trans'

export default function Aa() {

  const navigate = useNavigate()
  const ref = useRef()

  return (
    <div className='Aa'>
      <button onClick={()=>navigate('/c')}>跳转</button>
      <p>选择一张你喜欢的图片</p>
      <Trans><img src={defimg0} className='Aaimg' onClick={() => navigate('like/0')} ref={ref} key={0} /></Trans>
      <Trans><img src={defimg1} className='Aaimg' onClick={() => navigate('like/1')} ref={ref} key={1} /></Trans>
      <Trans><img src={defimg2} className='Aaimg' onClick={() => navigate('like/2')} ref={ref} key={2} /></Trans>
      <Trans><img src={defimg3} className='Aaimg' onClick={() => navigate('like/3')} ref={ref} key={3} /></Trans>
      <Trans><img src={defimg4} className='Aaimg' onClick={() => navigate('like/4')} ref={ref} key={4} /></Trans>
      <Trans><img src={defimg5} className='Aaimg' onClick={() => navigate('like/5')} ref={ref} key={5} /></Trans>
      <Trans><img src={defimg6} className='Aaimg' onClick={() => navigate('like/6')} ref={ref} key={6} /></Trans>
    </div>
  )
}
