const file = document.getElementById("file");
const imagesRow = document.getElementById("imagesRow");

let images = [];
const API = "FILE_STACK_API_KEY";
const client = filestack.init(API);

file.addEventListener("change", async (e) => {
	const request = await client.upload(e.target.files[0], {}, { filename: e.target.files[0].name }, {});

	images.push(request.url);
	imgMount();
});

function imgMount() {
	images.map(url => {
		imagesRow.innerHTML = `<img src="${url}" alt="Image" />`;
	});
}
