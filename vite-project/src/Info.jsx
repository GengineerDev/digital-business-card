import myPhoto from "./assets/photo.jpg"

export default function Info() {
    return (
        <div class="info">
            <img src={myPhoto} alt="My photo" className="photo"/>
            <h1 className="name">David Genesis Pedeglorio</h1>
            <p className="position">Full-stack Developer</p>
            <p className="website">genesis.website</p>
            <button><i className="fa fa-envelope"></i>Email</button>
        </div>
    )
}