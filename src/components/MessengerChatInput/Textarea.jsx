import React, { useState, useRef } from "react"
import styles from "./MessengerChatInput.module.scss"

function Textarea({ setValue, valueOfInput }) {
  const [rows, setRows] = useState(1)
  const ref = useRef(null)

  const checkMaxRows = (value) => {
    const width = ref ? ref.current.clientWidth : 0
    const { length } = value
    const r = /\n/g
    const amountOfEnters = value.match(r) ? value.match(r).length : 0
    const amountInOneRow = (width - 6) / 9.9
    const amountOfRows = Math.ceil(
      (length + amountInOneRow * amountOfEnters + 1) / amountInOneRow,
    )

    if (amountOfRows < 5 && amountOfRows > 0) {
      setRows(amountOfRows)
      return
    }
    if (amountOfRows > 4) {
      setRows(4)

      return
    }

    setRows(1)
  }

  const onChange = (event) => {
    const { value } = event.currentTarget
    checkMaxRows(value)

    setValue(value)
  }

  return (
    <textarea
      rows={rows}
      onChange={onChange}
      value={valueOfInput}
      ref={ref}
      className={styles.textarea}
      style={{ fontFamily: "monospace" }}
    />
  )
}

export default Textarea
