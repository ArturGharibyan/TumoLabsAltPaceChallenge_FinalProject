

const Button = ({ foods, delet }) => {
    return (
        <div className="option2">
            <button onClick={() => { delet(foods.id) }}>Delete</button>
        </div>
    )
}

export default Button