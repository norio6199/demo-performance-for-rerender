import React, { FC, useState } from "react";
import { JustDiv } from "./components/JustDiv";
import { MemoComponents } from "./components/MemoComponents";
import { NoMemoComponents } from "./components/NoMemoComponents";

export const App: FC = () => {
  const largeData = {} as any;
  [...new Array(10000)].forEach((item, index) => {
    largeData[index] = index;
  });

  const [data, setData] = useState<any>(largeData);
  const [renderCount, setRenderCount] = useState(1);

  const setLargeData = () => {
    setData({ ...largeData });
    setRenderCount(renderCount + 1);
  };

  const countUpRender = () => {
    setRenderCount(renderCount + 1);
  };

  return (
    <div className="App">
      {renderCount}
      <br />
      <button onClick={setLargeData}>set large data</button>
      <button onClick={countUpRender}>count up render</button>
      <JustDiv />
      <NoMemoComponents data={data} />
      <MemoComponents data={data} />
    </div>
  );
};
