const startMap = new Map()
const root = document.querySelector('html')

export const transitCloneNode = (node,key) => {
  let start = node
  let nodePosition = node.getBoundingClientRect()
  start.classList.add('transit-0000')
  start.style.cssText += `top:${nodePosition.top}px !important;left:${nodePosition.left}px !important;`
  root.appendChild(start)
  startMap.set(key,start)
}

export const transitMoveNode=(node,key,style)=>{
  if(startMap.get(key)==undefined){
    return 0
  }
  node.style.opacity=0
  let start=startMap.get(key)

  setTimeout(()=>{

    let startPos = start.getBoundingClientRect()
    let nodePos = node.getBoundingClientRect()
    let moveLeft=nodePos.left-startPos.left
    let moveTop=nodePos.top-startPos.top

    start.style.cssText+=`transform: translateX(${moveLeft}px) translateY(${moveTop}px) !important;`
    start.classList=node.classList
    start.classList.add('transit-0000')
    for(let h in style){
      if(h!='top' && h!='left'){
        start.style[h]=style[h]
      }
    }

    start.ontransitionend=()=>{
      node.style.opacity=1
      start.ontransitionend=()=>{}
      root.removeChild(start)
    }

  },20)
}