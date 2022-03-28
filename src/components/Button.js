import '../components-css/Buttons.css'
const Buttons = ({handle, color}) => {

    return(
        <div className="box-quote">
            <div></div>
            <button className={color} onClick={handle}>
                <i class="fa-solid fa-shuffle"></i>
            </button>
            <button className='twitter'></button>
        </div>
    )
}
export default Buttons;