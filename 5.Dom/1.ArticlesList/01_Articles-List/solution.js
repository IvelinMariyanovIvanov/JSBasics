function solve() {
	let createdTitle = document.getElementById('createTitle');
	let createdContent = document.getElementById('createContent');

	let titleValue = createdTitle.value;
	let contentValue = createdContent.value;

	if(titleValue != "" && contentValue != "" ) {
		let articlesList = document.getElementById('articles');

	let newArticle = document.createElement('article');

	let newTitle = document.createElement('h3');
	newArticle.textContent =titleValue;

	let newContent = document.createElement('p');
	newContent.textContent = contentValue;

	newArticle.appendChild(newTitle);
	newArticle.appendChild(newContent);

	createdTitle.value = "";
	createdContent.value = "";

	articlesList.appendChild(newArticle);
	}

}
