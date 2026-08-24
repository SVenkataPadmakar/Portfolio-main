import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';
import Link from 'next/link';
import { config } from '@/data/config';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Made by:</span> {config.author}
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Domain:</span> AI &amp; Full Stack
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Stack:</span> Next.js + Spline
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href="/blogs" className="hover:underline underline-offset-4 transition-all">
            Blog
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href={config.social.github}
            target="_blank"
            className="hover:underline underline-offset-4 transition-all"
          >
            GitHub
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href={config.social.linkedin}
            target="_blank"
            className="hover:underline underline-offset-4 transition-all"
          >
            LinkedIn
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}

