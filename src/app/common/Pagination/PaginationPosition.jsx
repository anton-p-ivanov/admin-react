import React from "react";

const PaginationPosition = ({ first, last, total }) => (
    <div className="pagination__position">
        Elements { first } - { last } of { total } are shown
    </div>
);

export default PaginationPosition;