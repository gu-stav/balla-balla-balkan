<?php while (have_posts()):
        the_post(); ?>
<article class="episode">
    <h2 class="episode__title">
      <?php the_title(); ?>
    </h2>

  <div class="episode__content">
    <?php the_content(); ?>
  </div>
</article>
<?php
      endwhile; ?>
