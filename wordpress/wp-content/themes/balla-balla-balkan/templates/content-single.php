<?php while (have_posts()) : the_post(); ?>
  <article class="episode">
    <header class="episode__header"
            style="background-image: url(<?php echo the_post_thumbnail_url('post-thumbnail'); ?>)">
      <div class="episode__canvas">

        <?php
          $soundcloud_embed = get_field('image', get_the_ID());
          echo $soundcloud_embed;
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

    <div class="episode__content">
      <?php the_content(); ?>
    </div>
  </article>
<?php endwhile; ?>
