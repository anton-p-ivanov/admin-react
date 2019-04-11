import "@assets/common/Pagination.scss";

import React from "react";
import PaginationPager from "./PaginationPager";
import PaginationPosition from "./PaginationPosition";

const Pagination = ({ page = 1, size = 20, total = 20, onClick }) => {
    const attr = {
        first: (page - 1) * size + 1,
        last: Math.min(page * size, total),
        total: total
    };

    return (
        <div className="pagination">
            <PaginationPager page={ page } pages={ Math.ceil(total / size) } onClick={ onClick }/>
            <PaginationPosition { ...attr }/>
        </div>
    );
};

export default Pagination;