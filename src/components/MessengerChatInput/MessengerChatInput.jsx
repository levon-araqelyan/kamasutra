import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./MessengerChatInput.module.scss"
import Textarea from "./Textarea"

const MessengerChatInput = ({sendMessage,valueOfInput,setValue}) => {

    return (
        <div className={styles.chatWrap}>
            <div className={styles.textareaWrap}>
                <Textarea setValue={setValue} valueOfInput={valueOfInput}/>
            </div>
            <span
                onClick={() => {
                    sendMessage(valueOfInput)
                }}
                style={{marginLeft: "20px"}}
            >
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.4 17.4L18.85 9.92002C19.66 9.57002 19.66 8.43002 18.85 8.08002L1.4 0.600017C0.74 0.310017 0.00999999 0.800017 0.00999999 1.51002L0 6.12002C0 6.62002 0.37 7.05002 0.87 7.11002L15 9.00002L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z"
            fill="white"/>
        </svg>
      </span>
        </div>
    )
}

MessengerChatInput.propTypes = {
    sendMessage: PropTypes.func,
}

MessengerChatInput.defaultProps = {
    sendMessage: () => {
        console.log("return message")
    },
}

export default MessengerChatInput
