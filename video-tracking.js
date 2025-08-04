<script>
  document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('main-video');
    var hasFired = false;

    if (video) {
      video.addEventListener('timeupdate', function () {
        var percentagePlayed = (video.currentTime / video.duration) * 100;

        if (!hasFired && percentagePlayed >= 50) {
          fbq('trackCustom', 'Video50Percent', {
            content_name: 'VSL Main Video',
            content_type: 'video',
            content_ids: ['main-video']
          });
          hasFired = true;
        }
      });
    }
  });
</script>
