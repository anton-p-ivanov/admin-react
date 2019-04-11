import React from "react";
import Icon from "../Icon/Icon";
import PagerPrevious from "@app/common/Pager/PagerPrevious";
import PagerLink from "@app/common/Pager/PagerLink";
import PagerNext from "@app/common/Pager/PagerNext";

const Pager = ({ page = 1, pages = 1, onClick }) => (
    <ul className="pager">
        <li className="pager__item">
            <PagerPrevious page={ page } pages={ pages } onClick={ onClick }>
                <Icon type="backward"/>
            </PagerPrevious>
        </li>
        <li className="pager__item pager__item--pages">
            <PagerLink page={ page > 1 ? 1 : pages }
                       title={ page > 1 ? "First page" : "Last page" }
                       onClick={ onClick }>
                <span>{ page } of { pages }</span>
            </PagerLink>
        </li>
        <li className="pager__item">
            <PagerNext page={ page } pages={ pages } onClick={ onClick }>
                <Icon type="forward"/>
            </PagerNext>
        </li>
    </ul>
);

export default Pager;