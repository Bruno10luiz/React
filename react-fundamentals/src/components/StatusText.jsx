/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
export default () => {
    const status = true

    return (
        <h2
            style={{
                color: status ? "#00ff9f" : "#f64348"
            }}
        > Current status: {status ? "On" : "Off"}</h2>)
}