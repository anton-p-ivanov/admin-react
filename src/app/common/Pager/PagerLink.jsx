import React from "react";
import { Link } from "react-router-dom";

const PagerLink = ({ page, title, onClick, children }) => (
    <Link to={ `/users/${ page }` }
          className="pager__link"
          title={ title }
          onClick={ () => {
              onClick(page)
          } }>{ children }</Link>
);

export default PagerLink;