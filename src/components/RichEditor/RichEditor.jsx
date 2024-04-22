import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedData = localStorage.getItem("draftEditorData");
    if (savedData) {
      return EditorState.createWithContent(
        convertFromRaw(JSON.parse(savedData))
      );
    } else {
      return EditorState.createEmpty();
    }
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!editorState.getCurrentContent().hasText()) return; // No need to prompt if there's no text
      const unsavedChanges = localStorage.getItem("draftEditorData");
      if (unsavedChanges && JSON.stringify(unsavedChanges) !== JSON.stringify(convertToRaw(editorState.getCurrentContent()))) {
        const confirmationMessage =
          "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [editorState]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const contentStateJson = JSON.stringify(convertToRaw(contentState));
    localStorage.setItem("draftEditorData", contentStateJson);
  };

  return (
    <div style={{ width: "80%" }}>
      <h2>Rich Text Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ["inline", "list"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          list: {
            options: ["unordered", "ordered"],
          },
        }}
        wrapperStyle={{ backgroundColor: "white", padding: "10px" }}
        editorStyle={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "8px",
        }}
      />
    </div>
  );
};

export default RichTextEditor;
