const { Component, mount, xml, useState, onWillStart, onWillRender, onRendered, onWillUpdateProps, onWillDestroy, onWillUnmount, onMounted, onWillPatch } = owl;


class Computer extends Component {
  static template = xml`<div class="col-4">
    <div id="computer_header" class="card-header">
        Computer 
      </div>
      <div id="computer_body" class="card-body border">
        <img id="computer_img" src="img/paper.png" class="img-thumbnail w-50 mb-2" alt="..."></img>
      </div>
</div> `;
}

class Score extends Component {
  static template = xml`<div class="col-4 align-self-center">
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">Score</h5>
          <h6 class="card-subtitle mb-2 text-muted">Computer VS User</h6>
          <h1 class="card-text"><span><t t-esc="this.props.result.computer" /></span> : <span><t t-esc="this.props.result.user"/></span></h1>
          <h6 id="scores" class="card-subtitle mb-2 text-muted mt-3">Result</h6>
        </div>
      </div>
  </div> `
   static props = ["result"];
}


class Container extends Component {
  static template = xml`<div class="container mt-3 shadow p-3 mb-5 bg-body rounded">
    <div class="card text-center">
        <div class="card-header">
          Rock Paper Scissor Game
        </div>
        <div class="card-body">
            <div class="row row-cols-3">
                <Computer/>
                <Score result="state"/>
                <div class="col-4">
    <div id="user_header" class="card-header">
        User
      </div>
      <div id="user_body" class="card-body border">
        <img id="user_img" src="img/paper.png" class="img-thumbnail w-50 mb-2" alt="..."></img>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button id="0" type="button" class="btn btn-outline-secondary" t-on-click="fight" value="rock">Rock</button>
            <button id="1" type="button" class="btn btn-outline-secondary" t-on-click="fight" value="paper">Paper</button>
            <button id="2" type="button" class="btn btn-outline-secondary" t-on-click="fight" value="scissor">Scissor</button>
          
          </div>
      </div>
</div>      
            </div>
        </div>
        <div class="card-footer text-muted">
          Good Luck <t t-esc="state.user" />
        </div>
      </div>
</div>`;


setup() 
{
  this.state = useState({ user: 0 , computer: 0})
}

  fight(ev) 
  {

    let ids = ev.target.id
    let x = Math.floor(Math.random() * 3)
    let choices = ['rock', 'paper', 'scissor']
    let a = choices[x];
    let b = choices[ids];
    computer_img.src = `img/${a}.png`;
    user_img.src = `img/${b}.png`;
    if ((a == "rock" & b == "scissor") | (a == "scissor" & b == "paper") | (a == "paper" & b == "rock")) {
      this.state.computer++;
      scores.innerHTML = "Computer Wins";
    }
    else if ((b == "rock" & a == "scissor") | (b == "scissor" & a == "paper") | (b == "paper" & a == "rock")) {
      this.state.user ++;
      scores.innerHTML = "User Wins";
    } else {
      scores.innerHTML = "Tie";
    }
  }

  static components = { Score, Computer };
}


mount(Container, document.body, { dev: true })