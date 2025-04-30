function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xjZ9gxwlKX":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgSongku.mp3";
audio.load();
audio.play();
audio.volume=0.05;

}

