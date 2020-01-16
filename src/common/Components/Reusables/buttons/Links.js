import React from "react"
import classnames from 'classnames';

const Links = (props) => {
    const {name, href, className, children} = props;
    return (
        <a
            href={href}
            className={classnames(["btn btn-primary py-3 px-5 btn-pill", className])}
        >
        {children}
      </a>
    )
}

export default Links