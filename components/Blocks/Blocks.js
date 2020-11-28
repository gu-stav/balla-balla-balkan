import Markdown from "react-markdown";

import Headline from "../Headline";
import Paragraph from "../Paragraph";
import Stack from "../Stack";

const renderers = {
  heading: ({ level, children }) => (
    <Headline level={level}>{children}</Headline>
  ),
  paragraph: (props) => <Paragraph {...props} />,
};

import styles from "./Block.module.css";

const Blocks = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <Stack gap="tiny" className={styles.container}>
      {blocks.map((block) => {
        const { type, node, ...blockprops } = block;

        switch (type) {
          case "richtext": {
            const { richtext, ...props } = blockprops;
            return (
              <Markdown renderers={renderers} {...props}>
                {richtext}
              </Markdown>
            );
          }

          default:
            return null;
        }
      })}
    </Stack>
  );
};

export default Blocks;
