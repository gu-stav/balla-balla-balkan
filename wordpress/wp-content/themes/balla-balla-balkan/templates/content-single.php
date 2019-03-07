<?php while (have_posts()) : the_post(); ?>
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

    <div class="episode__content">
      <script type="text/javascript" src="https://steadyhq.com/widget_loader/da5092ad-eb62-40e8-a5a9-b0e2ed4f7391"></script>

      <?php the_content(); ?>

      <script type="text/javascript" src="https://steadyhq.com/widget_loader/da5092ad-eb62-40e8-a5a9-b0e2ed4f7391"></script>
    </div>
  </article>
<?php endwhile; ?>
