import React, { useRef, useEffect, useState } from "react";
import styles from './accordian.module.css';

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef(null);
    const [height, setHeight] = useState("0px");

    const { header, id, text } = faq || {};

    useEffect(() => {
        if (active === id && contentEl.current) {
            setHeight(`${contentEl.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [active, id]);

    return (
       <div className={styles.MainAccordianContainer}>
         <div className={styles.rcAccordionCard}>
            <div className={styles.rcAccordionHeader}>
                <div
                    className={`${styles.rcAccordionToggle} ${active === id ? styles.rcAccordionToggleActive : ''} p-3`}
                    onClick={() => handleToggle(id)}
                >
                    <h5 className={styles.rcAccordionTitle}>{header}</h5>
                    <svg className={styles.rcAccordionIcon} width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" fill="#5B3524"/></svg>
                </div>
            </div>
            <div
                ref={contentEl}
                className={`${styles.rcCollapse} ${active === id ? styles.rcCollapseShow : ''}`}
                style={{ height }}
            >
                <div className={styles.rcAccordionBody}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default AccordionItem;
