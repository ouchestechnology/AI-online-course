import React from "react"
import classnames from 'classnames';

const RoundedButton = (props) => {
    const {name, onClick, loading, disabled, className} = props;

    return (
        <button
            className={classnames(["btn btn-primary btn-pill", className])}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
            {loading ? <i style={{marginLeft: 15, fontSize: 16}} className="fa fa-circle-o-notch fa-spin"></i> : null}
        </button>
    )
}

export default RoundedButton