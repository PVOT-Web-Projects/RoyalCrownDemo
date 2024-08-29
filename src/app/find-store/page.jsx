"use client"
import FindStoreHeader from "@/components/findstoreheader/page";
import FindStore from "../../components/findStore_search/page"
import { useRef } from "react";

const FindStoreSearch =() =>{
    const section1 = useRef();
    const section2 = useRef();
    function scrollTo(section) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
    return(
        <div>
            <div ref={section1}>
                <FindStoreHeader goToSectionRef={section2} scrollTo={scrollTo}/>
            </div>
            <div ref={section2}>
            <FindStore />

            </div>
        </div>
    )
}
export default FindStoreSearch;