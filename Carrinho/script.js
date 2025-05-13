$(document).ready(function() {
//recuperar o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    // atribuir a uma variavel a lista do html
    const listaElement = $("#lista");
    // atribuir a uma variavel o total referente no html
    const totalElement = $("#total");
    
    // função para exibir este carrinho em forma de lista

    function exibirCarrinho() {
        //limipar o conteúdo atual da lista no cache do sistema
        // criar um elemento de lista para cada item
        listaElement.empty()
        
        // variavel para calcular o total 
        let totalPreco = 0

        $.each(carrinho, function (index, item) {
            //criar um elemento de lista para cada item
            const listItem = $("<li>").text(`${item.descricao} - Preço:$${item.preco.toFixed(2)}`);

            //criar um botão de remover item
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function() {
                removerItemDoCarrinho(index)
            });

            listItem.append(removeButton);
            listaElement.append(listItem);

            // adiciona o preço do item ao total
            totalPreco += item.preco;

        })
        // Exibe o toal em preço no elemento totalElement
        totalElement.text(`Total: $${totalPreco.toFixed(2)}`);
 
    }
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }
 
    exibirCarrinho();
});

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    console.log(listaElement, totalElement)

    // clonar a lista, assim evitando a modificação direta da lista original
    const listaClone = listaElement.cloneNode(true);

    // remover os botões de remoção do elemento (que são os botões vermelhos, os x)
    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudOHtml = `
    
        <html>
            <meta charset="UTF-8"/>
            <body>
                <h1>Pedido confirmado</h1>
                <h3>Agradecemos sua compra conosco e sua prefenrência</h3>
                <br>
                ${listaHtml}
                <br>
                <br>
                ${totalHtml}
            </body>
        </html>
        `;
        const blob = new blob([conteudOHtml], {type: "application/msword"})
        const link = document.createElement("a")

        link.href = URL.createObjectURL(blob);
        link.download = "pedido.doc";
        link.click();

        document.getElementById("pedido").style.display = "block"
};


function successClose(){
    document.getElementById("pedido").style.display = "none"
};