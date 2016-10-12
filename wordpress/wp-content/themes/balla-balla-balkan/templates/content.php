<article class="episode">
  <header class="episode__header">
    <div class="episode__canvas">
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
