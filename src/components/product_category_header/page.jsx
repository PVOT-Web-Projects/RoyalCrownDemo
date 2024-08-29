"use client";
import {motion} from "framer-motion";
import "./page.scss";
export default function ProductCategoryHeader (){
    return(
        <>
        <div className="productCategoryHeader">
            <div className="productCategoryHeaderInner">
                <motion.div className="productCategoryHeaderText"
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}>
                    <div className="productCategoryHeaderTextInnner">ELECTROSTATIC DISSIPATIVE LAMINATES</div>
                </motion.div>
            </div>
        </div>
        </>
    )
}