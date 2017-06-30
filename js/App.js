//ZMIENNE DO KOMUNIKACJI Z SERWEREM
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '1930',
  'X-Auth-Token': '4dd7daa13b439bf9c3a4d538ec749345'
};

//FUNKCJA DODAWANIA NAGLÓWKÓW BEZ KONIECZNOŚCI UMIESZCZANIA ICH W KAŻDYM ZAPYTANIU OSOBNO
$.ajaxSetup({
	headers: myHeaders
});

//ZAPYTANIE DO SERWERA
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

//STWORZENIE TYLU KOLUMN ILE DOSTALIŚMY W ODPOWIEDZI Z SERWERA
function setupColumns(columns) {
    columns.forEach(function (column) {
    	var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}

