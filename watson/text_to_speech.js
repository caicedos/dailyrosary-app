const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: '' }),
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});

const params = {
  text: 'Hail Mary, Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruitof thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now, and at the hour of our death.   Amen.',
  voice: 'en-US_MichaelV3Voice', // Optional voice
  accept: 'audio/wav'
};

// Synthesize speech, correct the wav header, then save to disk
// (wav header requires a file length, but this is unknown until after the header is already generated and sent)
// note that `repairWavHeaderStream` will read the whole stream into memory in order to process it.
// the method returns a Promise that resolves with the repaired buffer
textToSpeech
  .synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    fs.writeFileSync('audio.wav', repairedFile);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });