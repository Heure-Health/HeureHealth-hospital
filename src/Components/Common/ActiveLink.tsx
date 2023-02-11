import {useRouter} from "next/router";
import React, {useEffect} from "react";
import Link from "next/link";

const ActiveLink = ({href, title, prefetch}) => {
    const router = useRouter();

    useEffect(() => {
        if (prefetch) router.prefetch(href);
    });

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <Link href={href} onClick={handleClick}>
            {title}
        </Link>
    );
};
export default ActiveLink;
