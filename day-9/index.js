import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.TOKEN);


const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');
const userInput = document.getElementById('user-input');
const form = document.querySelector('form');


dialogModal.showModal();


form.addEventListener('submit', async (event) => {
    event.preventDefault();


    const response = await hf.textToImage({
        inputs: userInput.value,
        model: 'stabilityai/stable-diffusion-2',
        parameters: {
            negative_prompt: 'blurry',
        }
    });

    
    const imageUrl = await blobToBase64(response);
    displayImage(imageUrl);

    
    dialogModal.close();
});



async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}


function displayImage(imageUrl) {
    const img = imageContainer.querySelector('img') || new Image();
    img.src = imageUrl;
    imageContainer.appendChild(img);
}
