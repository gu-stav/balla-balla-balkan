<?php use Roots\Sage\Titles; ?>

<?php
$title = Titles\title();
?>

<?php if($title): ?>
  <div class="page-header">
    <h1 class="page-header__title">
      <?= esc_html($title);  ?>
    </h1>
  </div>
<?php endif; ?>

<?php if (is_page()) : ?>
<?php while (have_posts()):
        the_post(); ?>
  <article class="episode">
    <div class="episode__content">
      <?php the_content(); ?>
    </div>
  </article>
<?php
      endwhile; ?>

    <?php endif; ?>