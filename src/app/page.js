'use client'

import "./style.css";
import { motion }  from 'framer-motion';

export default function Home() {
  return (
    <main className="uh">
      <div id = "right-side" className="side catpage">
        <motion.div initial={{opacity: 0}} whileInView={{ opacity:[0, 0, 0, 0, 0.2, 0.2, 0.4, 0.4, 0.6, 0.8, 1]}} viewport={{once :true}}>
        <motion.div animate={{y: 100}}>
        <div className="title"> CATS!</div>
        </motion.div>
        <motion.div animate={{y: 1000}}>
        <div className="title"> Meow</div>
        </motion.div>
        <motion.div animate={{y: 2000}}>
        <div className="title"> Nya~</div>
        </motion.div>
        <motion.div animate={{y: 3000}}>
        <div className="title">I Love you</div>
        </motion.div>
        <motion.div animate={{y: 3500}}>
        <div className="title"> Happy Birthday! 🎂</div>
        </motion.div>
        </motion.div>
      </div> 
    </main>
  );
}
