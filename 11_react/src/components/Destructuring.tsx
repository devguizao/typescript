import * as React from 'react';

interface IAppProps {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    //5 - enum
    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring: React.FunctionComponent<IAppProps> = ({title, content, commentsQty, tags, category}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidades de comentários: {commentsQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tags}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
