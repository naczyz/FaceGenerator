
const getFace =  async (e) => {
    e.preventDefault()
    const gender = document.getElementById('gender').value
    const age = document.getElementById('age').value
    const ethnicity = document.getElementById('ethnicity').value

    const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79ba893ce3msh01b84c71aabfc5cp1edeecjsn8a7aebc89b70',
            'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.blob();
        const image = URL.createObjectURL(result);
        const imageDOM = document.createElement('img');
        imageDOM.src = image;
        imageDOM.style.display = 'block';
        imageDOM.style.margin = 'auto';
        imageDOM.style.height = '600px';
        imageDOM.style.width = '600px';

        document.body.appendChild(imageDOM);
        console.log(result);


        const existingImage = document.querySelector('img');
        if (existingImage) {
            document.body.replaceChild(imageDOM, existingImage);
        } else {
            // Dodanie obrazu do ciała dokumentu
            document.body.innerHTML = '';  // Usunięcie poprzednich elementów z body
            imageDOM.id = 'img';
            document.body.appendChild(imageDOM);
        }
    } catch (error) {
        console.error(error);
    }
}
document.querySelector('#form').addEventListener('submit', getFace)