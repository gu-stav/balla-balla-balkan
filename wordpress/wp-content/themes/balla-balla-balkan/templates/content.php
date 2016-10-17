<article class="episode">
  <header class="episode__header"
          style="background-image: url(<?php echo the_post_thumbnail_url('post-thumbnail'); ?>)">
    <div class="episode__canvas">

      <iframe width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283003271&amp;color=ffed00&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_artwork=false"></iframe>

      <h2 class="episode__title">
        <a href="<?php the_permalink(); ?>">
          <?php the_title(); ?>
        </a>
      </h2>

      <div class="episode__excerpt">
        <?php the_excerpt(); ?>
      </div>
    </div>
  </header>
</article>
