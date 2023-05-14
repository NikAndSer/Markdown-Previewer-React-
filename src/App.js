import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import autosize from "autosize";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



function App() {
  const [text, setText] = useState(`# Hello my name's Andy!
  ## Here is a sub heading element (H2 size)
  
  We also have a [link here](https://www.freecodecamp.org/andreiCode)
  
  
  And even an\  inline code \`<p>Hello</p>\`
  
  I dare say that there's some code block as well
  \`\`\`
  function someCodeBlock() {
    console.log("code block");
  }
  \`\`\`
  
  And of of course
  
  * a list item
  * a list item
  * a list item
  * a list item
  
  > How can we go without at least a single blockquote
  
  ![And of course a wonderful image somwhere...](https://images.freeimages.com/vhq/images/previews/33b/mountaineering-418449.jpg)
  
  **Almost forgot about bolded text!**`);

  const textareaRef = useRef(null);
  
  useEffect(() => {
    autosize(textareaRef.current); // Inititalize Autosize on component mount
  }, []);

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App container-fluid">

      {/* Top Navbar */}
      <div className="row border-bottom border-2 border-success bg-info">
        <div className="col text-center my-3">
          <h1>Markdown Previewer by D'Andy (Bootstrap + React)</h1>
        </div>
      </div>

      {/* Only 1 row */}
      <div className="row">

        <div class="col-4 p-4">
          {/* Textarea navbar */}
          <nav class="navbar bg-info rounded-top border border-2 border-success">
            <div class="container-fluid d-flex justify-content-center">
              <span class="navbar m-0 h3">Editor</span>
            </div>
          </nav>
          {/* Textarea Form */}
          <div class="form-floating rounded-top-0 bg-light-subtle border border-2 border-success border-top-0">
            <textarea
              id="editor"
              className="form-control"
              onChange={(event) => {
                setText(event.target.value);
              }}
              value={text}
              ref={textareaRef}
            ></textarea>
          </div>
        </div>

        {/* Preview */}
        <div class="col-8 p-4">
          {/* Preview navbar */}
          <nav class="navbar bg-warning rounded-top border border-2 border-success">
            <div class="container-fluid d-flex justify-content-center">
              <span class="navbar m-0 h2">Preview</span>
            </div>
          </nav>
          {/* Preview form */}
          <div id="preview"
            className="form-control rounded-top-0 bg-light-subtle border-2 border-success border-top-0 d-flex flex-column"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>


      </div>
    </div>
  );
}

export default App;
