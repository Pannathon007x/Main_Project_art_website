const sign_up = () => {
    return <div>
        <h1>Sign Up</h1>
        <form action="http://localhost:3001/signup" method="post">
            <input type="text" name = "email" className="inpunname, border 20px border-solid" />
            <button type="submit">helo</button>
        </form>
    </div>
}
export default sign_up;