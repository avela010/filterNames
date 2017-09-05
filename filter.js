let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// Get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	// Get names UL
	let ul = document.getElementById('names');
	let li = ul.querySelectorAll('li.collection-item');

	// loop through collection-item li
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];

		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		}else{
			li[i].style.display = 'none';
		}
	}



}
