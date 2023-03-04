const innerText = document.querySelector("#latin-text");
const outerText = document.querySelector(".latin-result>pre>code");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // получили текст
  let text = innerText.value.trim();
  if (text === "") return;
  // решение на основе шаблонной строки
  const t =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{};':\"|?,./ ";

  let out = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ">") {
      out += "&#x3E;";
    } else if (text[i] === "<") {
      out += "&#x3C;";
    } else if (text[i] === "\n") {
      out += "<br>";
    } else if (t.indexOf(text[i]) === -1) {
      out += "<mark>" + text[i] + "</mark>";
    } else {
      out += text[i];
    }
  }
  console.log(out);
  outerText.innerHTML = out;
});

btn.addEventListener("click", () => {
  // получили текст
  let text = innerText.value.trim();
  if (text === "") return;
  let result
  // решение на основе регулярных выражений
  let regexp = /[^\w\s'",\\.:;?!@#$%^&*(+-=)_{}\[\]<>]/gi

  result = text.replace(/\>/g, str => "&#x3E;")
  result = result.replace(/\</g, str => "&#x3C;")
  result = result.replace(regexp, symbol => "<mark>" + symbol + "</mark>")

  console.log(result);
  outerText.innerHTML = result;
});
