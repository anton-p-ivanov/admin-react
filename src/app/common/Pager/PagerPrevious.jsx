import React from "react";
import PagerLink from "@app/common/Pager/PagerLink";

const PagerPrevious = ({ page = 1, pages = 1, onClick, children }) => (
    page > 1
        ? <PagerLink page={ +page - 1 } title="Previous page" onClick={ onClick }>{ children }</PagerLink>
        : <span className="pager__span">{ children }</span>
);

export default PagerPrevious;