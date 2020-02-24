<?php use Roots\Sage\Titles; ?>

<?php
$title = Titles\title();
?>

<?php if($title): ?>
  <div class="page-header">
    <h1 class="page-header__title">
      <?= esc_html($title);  ?>
    </h1>

    <?php the_content(); ?>
  </div>
<?php endif; ?>
