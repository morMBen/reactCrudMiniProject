const Input = ({ onUserChange, myValue, id }) => {
    return (
        <input id={id} onChange={onUserChange} value={myValue} />
    )
}

export default Input;