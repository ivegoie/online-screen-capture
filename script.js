const screenElement = document.querySelector('#screen');
const button = document.querySelector('#button');

async function selectMediaStream() {
    try {
        //* Prompt to select media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        //* Passing to screenElement
        screenElement.srcObject = mediaStream;

        //* Play selected screen
        screenElement.onloadedmetadata = () => {
            screenElement.play();
        }
    } catch (error) {
        console.log('ooops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    //* When clicked disable button
    button.disable = true;
    //* Start Picture in Picture
    await screenElement.requestPictureInPicture();
    //* Reset Button
    button.disable = false
    button.visible = false;
});

selectMediaStream();