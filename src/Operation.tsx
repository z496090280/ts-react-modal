/*
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2021-04-11 18:48:54
 * @LastEditors: daping
 * @LastEditTime: 2021-04-11 19:59:28
 */
import React from 'react'
import { Modal } from 'antd-mobile'
import ReactDOM from 'react-dom'
import { Action } from 'antd-mobile/lib/modal/PropsType'

const stopMove = (e: any) => e.preventDefault()

export default function operation(
  actions = [
    { text: '取消' },
    { text: 'ok', onPress: () => { console.log('ok') } }
  ]
) {
  let div = document.createElement('div')
  const close = function () {
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    document.body.removeEventListener('touchmove', stopMove)
  }
  document.body.appendChild(div)

  const footer = actions.map((button: Action<React.CSSProperties>) => {
    const oldOnPress = button.onPress || (() => { })
    button.onPress = () => {
      const res = oldOnPress()
      if (res && res.then) {
        res.then(close).catch(() => { })
      } else close()
    }
    return button
  })

  document.body.addEventListener('touchmove', stopMove, { passive: false })
  ReactDOM.render(
    (<Modal
      visible={true}
      transparent={true}
      closable={false}
      maskClosable={false}
      footer={footer}
      operation={true}
      className='am-modal-operation' />),
    div
  )
}
