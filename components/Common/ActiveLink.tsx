import { useRouter } from "next/router";
import { useEffect } from "react";

const ActiveLink = ({ href,title, prefetch }) => {
  const router = useRouter();

  useEffect(() => {
    if (prefetch) router.prefetch(href);
  });

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {title}
    </a>
  );
};
export default ActiveLink;
