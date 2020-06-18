import {useState, useRef, useEffect} from "react";
import {monaco as monacoPlugin} from "@monaco-editor/react";
import {initLanguage} from "./hiveLanguage";

export default function () {
  const [monaco, setMonaco] = useState(null)
  const editorRef = useRef(null);
  const valueRef = useRef(null)

  function handleEditorDidMount(value, editor) {
    valueRef.current = value
    editorRef.current = editor;
  }

  useEffect(() => {
    monacoPlugin.init()
      .then(monaco => {
        initLanguage(monaco);
        setMonaco(monaco)
      });
  }, [])
  return {monaco, editorRef, valueRef, handleEditorDidMount}
}
