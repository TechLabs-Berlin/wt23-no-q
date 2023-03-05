import './userform.css';

export default function userForm() {

    return (
        <div className="create">
            <h1>User Form</h1>
            <form action="">
                <label>Name:</label>
                <input type="text" required />
                <label>Number of people:</label>
                <input type="number" min="1" max="30" required />
                <label>Favorite drink</label>
                <select>
                    <option value="">--Please select an option</option>
                    <option value="whiskey">Whiskey</option>
                    <option value="gin">Gin</option>
                    <option value="vodka">Vodka</option>
                    <option value="rum">Rum</option>
                    <option value="beer">Beer</option>
                    <option value="water">Water</option>

                </select>
                <button>Get in Q!</button>
            </form>
        </div>
    )
}