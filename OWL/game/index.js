const { Component, mount, xml} = owl;


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

class Score extends Component{
    static template = xml`<div class="col-4 align-self-center">
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">Score</h5>
          <h6 class="card-subtitle mb-2 text-muted">Computer VS User</h6>
          <h1 class="card-text"><span id="computer_score">0</span> : <span id="user_score">0</span></h1>
          <h6 id="score" class="card-subtitle mb-2 text-muted mt-3">Result</h6>
        </div>
      </div>
</div> `
}

class Button extends Component {
    static template = xml`<div class="col-4">
    <div id="user_header" class="card-header">
        User
      </div>
      <div id="user_body" class="card-body border">
        <img id="user_img" src="img/paper.png" class="img-thumbnail w-50 mb-2" alt="..."></img>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button id="1" type="button" class="btn btn-outline-secondary" t-on-click="() => fight(0)" value="rock">Rock</button>
            <button id="2" type="button" class="btn btn-outline-secondary" t-on-click="() => fight(1)" value="paper">Paper</button>
            <button id="3" type="button" class="btn btn-outline-secondary" t-on-click="() => fight(2)" value="scissor">Scissor</button>
          </div>
      </div>
</div>`;

    fight(id) {

        let x = Math.floor(Math.random() * 3)
        let choices = ['rock', 'paper', 'scissor']
        let a = choices[x];
        let b = choices[id];
        let c = Number(computer_score.textContent);
        let u = Number(user_score.textContent);
            computer_img.src = `img/${a}.png`
            user_img.src = `img/${b}.png`
            if ((a == "rock" & b == "scissor") | (a == "scissor" & b == "paper") | (a == "paper" & b == "rock")) {
                computer_score.innerHTML = c += 1;
                score.innerHTML = "Computer Wins";
            }
            else if ((b == "rock" & a == "scissor") | (b == "scissor" & a == "paper") | (b == "paper" & a == "rock")) {
                user_score.innerHTML = u += 1;
                score.innerHTML = "User Wins";
            } else {
                score.innerHTML = "Tie";
            }

}
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
                <Score/>
                <Button/>      
            </div>
        </div>
        <div class="card-footer text-muted">
          Good Luck
        </div>
      </div>
</div>`

static components = { Score, Computer, Button};
}


mount(Container, document.body)