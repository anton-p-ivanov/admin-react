import React from "react";
import Pager from "@app/common/Pager/Pager";

const PaginationPager = props => (
    <div className="pagination__pager">
        <Pager { ...props } />
    </div>
);

export default PaginationPager;