import React, { useLayoutEffect } from 'react'

export default function Trans(props) {
  useLayoutEffect(() => {
    let target = props.children.ref.current
    let nodeStyle = props.children.props.style
    //不放在微任务内会使得元素的某些属性会无法正确的获取到(元素的位置信息均为0)
    Promise.resolve().then(() => transitMoveNode(target, props.children.key, nodeStyle))
    return () => {
      transitCloneNode(target, props.children.key)
    }
  },[])


  return (
    <>{props.children}</>
  )
}

//用来存储被移动到html标签下方的元素
const startMap = new Map()
const root = document.querySelector('html')


//该函数的作用是获取到将要被移除的节点,并将该元素移动到html标签下方,并添加对应的css样式使得该元素在页面中实际所显示的位置不变
//被移动了的节点会存储到startMap内,键值为给定的key值
function transitCloneNode(node, key) {
  if(node==null){
    return 0
  }
  let {top,left} = node.getBoundingClientRect()
  //这里添加一个微任务是因为--如果要移动多个元素,那么移动一个后该元素后面的元素位置可能会受到影响,所以放到一个微任务里面去进行,并且在进行此步骤之前先获取该元素在页面中显示的位置
  Promise.resolve().then(() => {
    let start = node
    start.classList.add('transit-0000')
    start.style.cssText += `top:${top}px !important;left:${left}px !important;`
    startMap.set(key, start)
    root.appendChild(start)
    clearMap()
  })
}

//该函数的作用是获取到将要新增的节点,在startMap内查找有没有对应的被移动到html标签下方的节点,如果没有则直接退出
//如果有,则将新增的节点的opacity属性设为0,  并获取新增节点在页面中显示的位置, 将与之对应的之前被移动到html标签下方的节点(旧节点)的显示位置过渡到新节点的显示位置
//然后移除新节点的opacity属性同时将旧节点从dom中移除
function transitMoveNode(node, key, style) {
  if (startMap.get(key) == undefined) {
    return 0
  }
  node.style.opacity = 0
  let start = startMap.get(key)
  startMap.delete(key)

  let startPos = start.getBoundingClientRect()
  let nodePos = node.getBoundingClientRect()
  let moveLeft = nodePos.left - startPos.left
  let moveTop = nodePos.top - startPos.top
  //此处多加0.0001是避免新旧节点所显示的位置一样,位置一样可能会使得旧节点不会进行过渡动画,也就不会触发ontransitionend事件,便会一直显示在页面上
  start.style.cssText += `transform: translateX(${moveLeft + 0.0001}px) translateY(${moveTop + 0.0001}px) !important;`
  start.classList = node.classList
  start.classList.add('transit-0000')

  for (let h in style) {
    if (h != 'top' && h != 'left') {
      start.style[h] = style[h]
    }
  }

  start.ontransitionend = () => {
    node.style.opacity = ''
    start.ontransitionend = () => { }
    root.removeChild(start)
  }

}

let x = true
//该函数的作用是清除没有与之对应的元素,比如在a页面有个被Trans包裹的a元素,但是b页面并没有与a元素对应key值的元素,此时就需要该函数来删除a元素
function clearMap() {
  if (x) {
    x = false
    Promise.resolve().then(() => {
      for (let [key, val] of startMap) {
        root.removeChild(val)
        startMap.delete(key)
      }
      x = true
    })
  }
}

//新增一个样式类
(function createStyle(){
  let text=document.createElement('style')
  text.setAttribute('type','text/css')
  text.innerHTML=`
  .transit-0000{
    transition: all ease .4s !important;
    position:absolute !important;
    top:0px;
    left:0px;
  }
  .transit-0000 *{
    transition: all ease .4s !important;
  }
  `
  document.querySelector('head').appendChild(text)
}())