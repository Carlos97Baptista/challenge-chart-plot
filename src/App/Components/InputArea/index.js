import React, { useContext, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/lucario.css";
import "codemirror/mode/javascript/javascript";
import { StateContext } from "../../index";
import styled from "styled-components";

// const code = 'const a = 0;';

export default function InputArea() {
  const stateContext = useContext(StateContext);
  return (
    <StyledDiv>
      <CodeMirror
        clearWhenEmpty={true}
        value=""
        options={{
          mode: "javascript",
          theme: "lucario",
          lineNumbers: true,
        }}
        editorDidMount={(editor) => editor.setSize("", "100%")}
        onChange={(editor, data, value) => {
          // reportedViewTo

          stateContext.setEditor(editor);
        }}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  resize: vertical !important;
  height: 200px;
  overflow: auto;

  .react-codemirror2 {
    height: 100%;
  }
  .CodeMirror {
    height: 100%;
  }
  .CodeMirror-scroll {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
