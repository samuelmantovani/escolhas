let suaidade;
let corpo;
let genero;
let titulo;
let aventura;
let romance;
let ficção;
let livros = {
  menor10:{
    aventura: "A Ilha do Tesouro",
    romance: "Turma da Mônica",
    ficção: "O Pequeno príncipe"
  },
  entre10e14:{
    aventura: "A Ilha Perdida",
    romance: "A Culpa é das Estrelas",
    ficção: "Coraline"
  },
  entre14e16:{
    aventura: "O Hobbit",
    romance: "Romeu e Julieta",
    ficção: "Harry Poter"
  },
  entre16e18:{
    aventura: "As Crônicas de Narnia",
    romance: "Dom Casmurro",
    ficção: "1984"
  },
  maior18:{
    aventura: "Vinte Mil Léguas Submarinas",
    romance: "Carteira de Trabalho 📘",
    ficção: "Admirável Mundo Novo"
  }
};

let botao

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo = "Abril Fatface";
  corpo = "Baskervville SC";
  genero = "Roboto";
  
 createSpan("Qual a sua idade? 🐣").position(650,530).addClass("esconde");
  suaidade = createInput("").position(650,650).addClass("esconde");
  aventura = createCheckbox("Você gosta de livros de aventura? 🐱‍👤").position(100,550).addClass("esconde");
  romance = createCheckbox("Você gosta de livros de romance? 🎀").position(100,600).addClass("esconde");
  ficção = createCheckbox("Você gosta de livros de ficção? 🐲").position(100,650).addClass("esconde"); 
  
  botao = createButton("😁COMEÇAR🙂").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("#faebd7");
  let idade = parseInt(suaidade.value());
  let checkaventura = aventura.checked();
  let checkromance = romance.checked();
  let checkficção = ficção.checked();
  let livro = "Insira suas preferências";
  if (suaidade.value() !== ""){
    livro = mostralivro(idade, checkromance, checkaventura, checkficção)
}
  
  fill("black");
  stroke("rgb(111,37,37)")
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE LIVROS 2024", width/2, 30);
  textFont(titulo)
  
  fill("rgb(165,8,8)");
  stroke("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(livro, width/2, height/2);
  textFont(corpo);
}

function mostralivro(idade, checkromance, checkaventura, checkficção){
  
  if (isNaN(idade)){
    return "idade inválida 😡"
  } 
  if (idade < 5){
    return "🍼 Você nem sabe ler 👶"
  }else
    if (idade > 119 && idade < 500){
      return "⚰️ enterra que ja foi 💀"

}else
  if (idade >= 500 ){
return "🧛🏽 Temos um vampiro entre nós 🦇" 
   
    }

  // entre 5 anos e 10 anos
  if (idade >= 5 && idade < 10){
    if (checkromance){
      return livros["menor10"]["romance"];
    }
    if (checkaventura){
      return livros["menor10"]["aventura"];
    }
    if (checkficção){
      return livros["menor10"]["ficção"];
    }
    
  } //entre 10 anos e 14 anos
  else if (idade >= 10 && idade < 14){
    if (checkromance){
      return livros["entre10e14"]["romance"];
    }
    if (checkaventura){
      return livros["entre10e14"]["aventura"];
    }
    if (checkficção){
      return livros["entre10e14"]["ficção"];
    }
     
  } //entre 14 anos e 16 anos
  else if (idade >= 14 && idade < 16){
    if (checkromance){
      return livros["entre14e16"]["romance"];
    }
    if (checkaventura){
      return livros["entre14e16"]["aventura"];
    }
    if (checkficção){
      return livros["entre14e16"]["ficção"];
    }
     
  } // entre 16 e 18 anos
 else if (idade >= 16 && idade < 18){
    if (checkromance){
      return livros["entre16e18"]["romance"];
    }
    if (checkaventura){
      return livros["entre16e18"]["aventura"];
    }
    if (checkficção){
      return livros["entre16e18"]["ficção"];
    }
    
  } // maior de 18 anos
 else if (idade >= 18){
    if (checkromance){
      return livros["maior18"]["romance"];
    }
    if (checkaventura){
      return livros["maior18"]["aventura"];
    }
    if (checkficção){
      return livros["maior18"]["ficção"];
    }
  } return "😑 Ai fica difícil né amigão 😑"; //Sem preferência nenhuma
}

