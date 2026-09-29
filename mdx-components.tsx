import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes } from "react";
import styles from "@/app/page.module.css";

const components: MDXComponents = {
  p: (props) => <p className="mt-4 first:mt-0" {...props} />,
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={styles.link}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
