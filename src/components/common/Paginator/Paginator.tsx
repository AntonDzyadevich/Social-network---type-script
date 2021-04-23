import React from 'react';
import s from "./Paginator.module.css";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage?: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
                                            pageSize,
                                            totalUsersCount,
                                            currentPage,
                                            onPageChanged
                                        }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? s.selectedPage : " "}
                         onClick={(e) => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}

    </div>
}

export default Paginator;