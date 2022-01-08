import React from 'react';
import './AddButton.css';
import { useNavigate } from 'react-router-dom';

function AddButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/submitDetails');
    };

    return (
        <div className="add_dev">
            <div className="cont1">
                <button onClick={handleClick} type="button">
                    Add Developer
                </button>
            </div>
        </div>
    );
}

export default AddButton;
