const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: '' }),
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});

const params = {
  text: 'Glory be to the Father, to the Son, and to the Holy Spirit, as it was, is now, and ever shall be, world without end. Amen.          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come. Thy Will be done, on earth as it is in Heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
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
    fs.writeFileSync('glorybeOurfather.wav', repairedFile);
    console.log('written with a corrected wav header');
  })
  .catch(err => {
    console.log(err)
  });