import React, { useRef } from 'react'
import defimg0 from '../assets/img3.jpg'
import defimg1 from '../assets/1de5159fb88f492a666a1976f5495f43.jpg'
import defimg2 from '../assets/a476b6f07a20a50b2594e2ba40431e8e.jpg'
import defimg3 from '../assets/d06fa633d8b87eb900f576a06d74c3a5.jpg'
import defimg4 from '../assets/da397d49b16d003fd542568f29d9716a.jpg'
import defimg5 from '../assets/fj2011950.jpg'
import defimg6 from '../assets/fje88b27550495d06a041a7854fcd07b8c.jpg'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Bb.css'
import Trans from './comp/Trans'

export default function Bb() {

  const ref = useRef()

  const navigate = useNavigate()
  const imgList = [defimg0, defimg1, defimg2, defimg3, defimg4, defimg5, defimg6]
  const id = Number(useParams().id)
  const bid = id == 0 ? imgList.length - 1 : id - 1
  const aid = id == imgList.length - 1 ? 0 : id + 1

  return (
    <div className='Bb' key={id}>
      <Trans key={Math.random()}><img src={imgList[bid]} className='Bbimg' onClick={() => navigate('/like/' + bid)} ref={ref} key={bid} /></Trans>
      <Trans key={Math.random()}><img src={imgList[id]} className='Bbimg2' onClick={() => navigate('/')} ref={ref} key={id} /></Trans>
      <Trans key={Math.random()}><img src={imgList[aid]} className='Bbimg' onClick={() => navigate('/like/' + aid)} ref={ref} key={aid} /></Trans>
    </div>
  )
}
