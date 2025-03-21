<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./app.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // This effect updates the preview in real-time when markdown changes.
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;

