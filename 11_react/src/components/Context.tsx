import { useContext } from "react";
import * as React from 'react';
import { AppContext } from "../App";



const App = () => {

const details = useContext(AppContext)

  return <>
    {details && (
        <div>
            <h2>Linguagem: {details.language}</h2>
            <h2>FrameWork: {details.framework}</h2>
            <h2>Quantidade: {details.projects}</h2>
        </div>
    )}
  </>;
};

export default App;
