<article class="episode">
  <header class="episode__header"
          style="background-image: url(<?php echo the_post_thumbnail_url('post-thumbnail'); ?>)">
    <div class="episode__canvas">

      <?php
        $soundcloud_embed = get_field('soundcloud-embed', get_the_ID());
        echo htmlspecialchars_decode($soundcloud_embed);
      ?>

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
