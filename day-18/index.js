/** OpenAI setup **/
// import OpenAI from "openai"
// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true
// })

/** HuggingFace setup **/
import { HfInference } from '@huggingface/inference'
const inference = new HfInference()
import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {


    /** HuggingFace **/
    const response = await inference.textToImage({
        inputs: imageToGenerate,
        model: "stabilityai/stable-diffusion-2",
    })
    const imageUrl = await blobToBase64(response)
    generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {

    
    const response = await inference.imageToText({
        data: await (await fetch(imageUrl)).blob(),
        model: "Salesforce/blip-image-captioning-base",
    })
    
    const altText = response.generated_text
    renderImage(imageUrl, altText);
    
}

function renderImage(imageUrl, altText) {
    console.log(altText)
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    imageContainer.appendChild(image)
}