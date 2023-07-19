function init() {
	const searchInput = document.getElementById("search");
	const results = document.getElementById("searchResults");
	const noResults = document.getElementById("noResults");
	const loader = document.getElementById("loader");

	function handleSearch() {
		const searchTerm = searchInput.value;

		//clear previous results
		results.innerHTML = "";

		//show empty state if there is no search term
		if (searchTerm.trim() === "") {
			showEmptyState();
			return;
		}

		// else show loading and fetch data
		showLoadingState();

		setTimeout(() => {
			fetchData(searchTerm);
		}, 500);
	}

	async function fetchData(searchTerm) {
		try {
			const res = await fetch(
				`https://itunes.apple.com/search?term=${searchTerm}&entity=song`
			);
			const data = await res.json();
			const resultList = data.results;

			//if there is result list
			if (resultList) {
				showElement(results);
				hideElements(loader, noResults);

				//if there is at elast one result, generate list item, else show empty state
				if (resultList.length > 0) {
					resultList.forEach((result) => {
						console.log(result);
						const resultEL = createResultItem(result);
						results.appendChild(resultEL);
					});
				} else {
					hideElements(results, loader);
					showElement(noResults);
					noResults.textContent =
						"Nema rezultata. Provjerite upisani termin i pokušajte ponovno";
				}
			}
		} catch (error) {
			//if there is an error, show error state
			showErrorState();
			console.log(error);
		}
	}

	function createResultItem(result) {
		//create HTML elements
		const listItem = document.createElement("li");
		const listItemText = document.createElement("span");
		const listItemImage = document.createElement("img");
		const listItemAudioPlayer = document.createElement("audio");

		//audio settings
		listItemAudioPlayer.controls = true;

		//result data
		const songName = result.trackName;
		const artistName = result.artistName;
		const artworkImg = result.artworkUrl60;
		const previewUrl = result.previewUrl;

		//append data to elements
		listItemText.textContent = `${songName} - ${artistName}`;
		listItemImage.src = artworkImg;
		listItemAudioPlayer.src = previewUrl;
		listItem.appendChild(listItemText);
		listItem.appendChild(listItemImage);
		listItem.appendChild(listItemAudioPlayer);

		//return result list item
		return listItem;
	}

	function showEmptyState() {
		hideElements(results, loader);
		showElement(noResults);
		noResults.textContent =
			"Za pretraživanje upišite naziv pjesme ili izvođača";
	}
	function showErrorState() {
		hideElements(results, loader);
		showElement(noResults);
		noResults.textContent =
			"Uh-oh, nešto nije dobro, refreshajte stranicu i pokušajte ponovno";
	}

	function showLoadingState() {
		hideElements(results, noResults);
		showElement(loader);
	}

	function showElement(element) {
		console.log(element);
		element.classList.remove("hidden");
	}

	function hideElements(...elements) {
		console.log(elements);
		elements.forEach((element) => {
			element.classList.add("hidden");
		});
	}

	//event listeners
	searchInput.addEventListener("input", handleSearch);
}

document.addEventListener("DOMContentLoaded", init);
