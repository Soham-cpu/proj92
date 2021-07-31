function login(){
    player1_name = document.getElementById("player1UsernameInput").value;
    player2_name = document.getElementById("player2UsernameInput").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "game_page.html"
}