import { createCampaign } from "../solana";
import { useState  } from "react";

const Form = ({setRoute}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImageLink] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await createCampaign(name, description, image);
        setRoute(0);
    }

    return (
        <form className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="title" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>description</label>
                <input type="text" name="description" placeholder="description" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>image link</label>
                <input type="text" name="imageLink" placeholder="image link" onChange={(e) => setName(e.target.value)} />
            </div>
            <button className="ui button" type="submit" onClick={onSubmit} ></button>
        </form>
    )
}

export default Form;