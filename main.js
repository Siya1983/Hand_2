https://teachablemachine.withgoogle.com/models/[...]

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:100

});


camera = document.getElementById("camera");

Webcam.attach('#camera');



function take_snapshot()
{
   Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id-"captured_img" src="'+data_uri+'"/>';

    });
}


console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.jason',modelLoaded);
function modelLoaded()
{
    console.log('ModelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The predition is " + prediction_1;
   
    var utterThis = new SpeechSynthesisUtterance(speak_dat_1);
    synth.speak(utterThis);
}