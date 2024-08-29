"use client";
import { useEffect, useRef } from "react";
import Privacy_policy from "@/components/policyData/page";
import PrivacyPolicyImg from "@/components/privacypolicyheader/page";

const PrivacyPolicy = () => {
  const section1 = useRef();
  const section2 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    document.title = "Privacy Policy | Royal Crown";
  });
  return (
    <div>
      <div ref={section1}>
        <PrivacyPolicyImg goToSectionRef={section2} scrollTo={scrollTo}/>
      </div>
      <div ref={section2}>
        <Privacy_policy />
      </div>
    </div>
  );
};
export default PrivacyPolicy;
