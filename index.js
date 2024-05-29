function criartabela(nome)  
{
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5;

    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);
    thead.appendChild(th_B);
    thead.appendChild(th_I);
    thead.appendChild(th_N);
    thead.appendChild(th_G);
    thead.appendChild(th_O);

  const num = [];
   for (let i = 1; i <= 75; i++)
   {
    num.push(i);
   }
   console.log(num);

    for (let i = 0; i < 5; i++) {
       
        const tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            
            if(i == 2 && j == 2 )
            {
                const td = document.createElement("td")
                td.innerHTML = "x";
                tr.appendChild(td);
            }
            else{
                const td = document.createElement("td");
                td.innerHTML = numeroaleatorios(num);
                tr.appendChild(td);
            }
            
            
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}

function pedirnomeecriartabela()
{
    const nome = prompt("Digite o seu nome: ");

    if (nome?.length < 5) 
    {
        alert("Digite um nome com mais de 5 letras!");
        return;
    }

    criartabela(nome);
}

function numeroaleatorios(num)
{   

   var lll = num.sort();
   return lll;
}
