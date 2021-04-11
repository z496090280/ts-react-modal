/*
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2021-04-11 18:44:00
 * @LastEditors: daping
 * @LastEditTime: 2021-04-11 20:02:08
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import alert from './Alert';
import operation from './Operation';
import prompt from './Prompt';

function App() {

  const handleModal = function () {
    alert('title', 'hello alert')
  }
  const handleModalOper = function () {
    operation([{ text: '标为未读' }, { text: '置顶聊天' }])
  }
  const handleModalInput = function () {
    prompt('title', '你多大了？')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={handleModal}>
          基础弹窗
        </button>
        <button onClick={handleModalOper}>
          operation弹窗
        </button>
        <button onClick={handleModalInput}>
          带输入框弹窗
        </button>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
      </header>
    </div>
  );
}

export default App;
