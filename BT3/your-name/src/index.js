import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="container">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
                src="https://th.bing.com/th/id/OIP.Au2WTCL1XIMi_vEL4uMcfwHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">abi</p>
                    <p className="text-sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
)