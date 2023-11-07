import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardSmall(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{props.title}</p>
                    <p id="genre">{props.genre}</p>
                </div>
                <div>
                    <AiFillStar color={props.color} size={props.size} />
                    <AiFillStar color={props.color} size={props.size} />
                    <AiFillStar color={props.color} size={props.size} />
                    <AiFillStar color={props.color} size={props.size} />
                    <AiFillStar color={props.color} size={props.size} />
                </div>
            </div>
        </div>
    );
}
