import React from "react";
import PagerLink from "@app/common/Pager/PagerLink";

const PagerNext = ({ page = 1, pages = 1, onClick, children }) => (
    page < pages
        ? <PagerLink page={ +page + 1 } title="Next page" onClick={ onClick }>{ children }</PagerLink>
        : <span className="pager__span">{ children }</span>
);

export default PagerNext;