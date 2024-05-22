Function criartabela(nome)
{
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


    const tr_nome = document.createElement("tr");
    const tr_nome = document.createElement("td");
    td_nome.innerhtml = nome;
    td_nome.colspan = 5;


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
    tr_head.appendChild(tr_nome);
    tr_head.appendChild(tr_B);
    tr_head.appendChild(tr_I);
    tr_head.appendChild(tr_N);
    tr_head.appendChild(tr_G);
    tr_head.appendChild(tr_O);

    for (let i = 0; i < 5; i++);
    {
        const tr = document.createElement("tr")
        for (let i = 0; i < 5; i++) 
        {
            const td = Document.createElement("td");
            td.innerHTML = "xx";
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}

function pedirnomeecriartabela()
{
    const nome = prompt("digite o seu nome: ");

    if(nome?.length < 5)
    {
        alert("Digite um nome com mais de 5 letras!");
        return;
    }

    criartabela(nome)
}