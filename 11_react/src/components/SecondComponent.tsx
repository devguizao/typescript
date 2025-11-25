import * as React from 'react';

interface IAppProps {
    name: string
}

const SecondComponent: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecondComponent;
