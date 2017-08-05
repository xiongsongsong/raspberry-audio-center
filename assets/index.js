var speakCl = 0

var mediaConstraints = {
  audio: true
};

var mediaRecorder

function onMediaSuccess(stream) {
  mediaRecorder = new MediaStreamRecorder(stream);
  mediaRecorder.stream = stream
  mediaRecorder.mimeType = 'audio/webm';
  mediaRecorder.ondataavailable = function (blob) {
    var blobURL = URL.createObjectURL(blob);
    console.log('success', blobURL)
  };
  mediaRecorder.start(30000);
}

function onMediaError(e) {
  console.error('media error', e);
  alert('失败')
}

new Vue({
  el: '#app',
  data: function () {
    return {}
  },
  methods: {
    startRecording: function (val) {
      navigator.mediaDevices.getUserMedia(mediaConstraints).then(onMediaSuccess).catch(onMediaError);
    },
    stopRecording: function () {
      console.log('停止')
      mediaRecorder.stop();
      mediaRecorder.stream.stop();
    },
    download: function () {
      console.log('下载')
      mediaRecorder.save()
    }
  }
})
