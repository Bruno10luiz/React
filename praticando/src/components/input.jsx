/* eslint-disable react/prop-types */

export default function Input(props) {
    return (

        <input
            type="number"
            id="customSize"
            min={1}
            value={props.customSize}
            onChange={(ev) => props.setCustomSize(ev.target.value)} />
    )
}