import * as React from "react";
import { motion } from "framer-motion";
import Link from '../Link/index'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#7289DA","#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const pathjson =[['Home', '/'],['Demo', '/demo'],['Invite', '/'],['Server', '/'],['Feedback', '/feedback'],['Commands', '/commands']]
//style={{backgroundColor: "#4E5D94"}}
export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
     
    >
      <div className="text-placeholder" style={style} >
        <Link to={pathjson[i][1]} style={{ color: `${colors[i]}` }}>
        {pathjson[i][0]}
        </Link>
      </div>
    </motion.li>
  );
};
