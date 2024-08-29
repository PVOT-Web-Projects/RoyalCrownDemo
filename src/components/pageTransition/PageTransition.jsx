"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const PageTransition = ({ children, href, ...props }) => {
  const router = useRouter();
  const pathname = usePathname();

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 300));
  };

  const handleTransition = async (e) => {
    e.preventDefault();
    // if (href === pathname) {
    //   return;
    // }
    const transition = document.querySelector("body");
    transition?.classList.add("page_transition");
    await sleep(300);
    router.push(href);
    await sleep(300);
    transition?.classList.remove("page_transition");
  };
  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
export default PageTransition;
