const checkbox = document.getElementById("Comment");
document.getElementById("CommentArea").style.visibility = "hidden";

checkbox.addEventListener('click', function () {
  if (this.checked) {
    document.getElementById("CommentArea").style.visibility = "visible";
  } else {
    document.getElementById("CommentArea").style.visibility = "hidden";
  }
});