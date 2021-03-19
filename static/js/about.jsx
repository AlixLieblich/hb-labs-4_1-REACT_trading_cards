"use strict";

function About() {
  return (
    <React.Fragment>
      <div>
        <h1>About Page</h1>
        <a href="/homepage" > Return to homepage </a>
      </div>
      <img src="/static/img/merge.jpg"></img>
      <p>Cute MERCAT</p>
      <p>SAY HELLO TO MERCAT</p>
    </React.Fragment>

  );
}

ReactDOM.render(<About />, document.getElementById('IDK'));
