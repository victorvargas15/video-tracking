document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('main-video');
  var hasFired = false;

  if (video) {
    video.addEventListener('play', function () {
      if (!hasFired) {
        fbq('trackCustom', 'VideoPlayed', {
          content_name: 'VSL Main Video',
          content_type: 'video',
          content_ids: ['main-vsl']
        });
        hasFired = true;
      }
    });
  }
});
