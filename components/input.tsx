import React, { ChangeEvent } from 'react'
import create from 'zustand'

// Create 상태 변수를 만들어 셋팅한다
export const useStore = create((set) => ({
  textState: '',
  setTextState: (text: string) => set(() => ({ textState: text })),
}))

const Input = () => {
  // 상태 변수
  const [text, setText] = useStore((state: any) => [
    state.textState,
    state.setTextState,
  ])
  // onChange input Value 값
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChangeHandler} />
      <h1>인풋 값{text}</h1>
    </div>
  )
}

export default Input
