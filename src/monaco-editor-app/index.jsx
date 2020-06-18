import React, {useState, useCallback} from "react";
import {Button} from "antd";
import {PlaySquareOutlined, DownloadOutlined} from "@ant-design/icons";

import {languageId} from "./hiveLanguage"
import Editor from "@monaco-editor/react";
import useMonaco from "./useMonaco";
import "./index.css"

const monacoOptions = {
  scrollBeyondLastLine: false,
  theme: languageId,
  fontSize: 12,
  fontFamily: "\"Ubuntu Mono\", Menlo, Monaco, \"Courier New\", monospace",
  language: languageId,
  value: ""
}

function ControllButtonGroup({execStatus, onRun, onDownload}) {
  switch (execStatus) {
    case "initial" :
      return <Button type="primary" key={1} icon={<PlaySquareOutlined />} onClick={onRun}>运行</Button>;
    case "running" :
      return <Button type="primary" key={2} loading>运行中</Button>;
    case "ready" :
      return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button style={{flex: 'auto'}} type="primary" key={3} icon={<PlaySquareOutlined />} onClick={onRun}>重新运行</Button>
          <Button style={{flex: 'auto'}} type="primary" key={4} icon={<DownloadOutlined />} onClick={onDownload}>下载结果</Button>
        </div>
      );
    default :
      return null
  }
}


function MonacoEditor(props) {
  const {
    monaco,
    editorRef,
    valueRef,
    handleEditorDidMount
  } = useMonaco()

  console.log({
    monaco,
    editorRef,
    valueRef,
  })

  const [execStatus, setExecStatus] = useState("initial");

  const onRun = useCallback(() => {
    setExecStatus("running")
    setTimeout(()=>{
      setExecStatus("ready")
    }, 2000)
  }, [])
  const onDownload = useCallback(() => {

  }, [])

  return (
    <div className="SQLEditor">
      <Editor
        height="auto"
        width="100%"
        editorDidMount={handleEditorDidMount}
        theme={languageId}
        language={languageId}
        options={monacoOptions}
      />
      <ControllButtonGroup {...{execStatus, onDownload, onRun}} />
    </div>
  );
}

export default MonacoEditor
