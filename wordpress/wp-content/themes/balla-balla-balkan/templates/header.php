<header class="header">
  <a class="header__logo-container"
     href="<?= esc_url(home_url('/')); ?>">

    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/balla-balla-logo.svg"
         alt="Balla-Balla Balkan"
         class="header__logo" />

    <span class="visually-hidden">
      <?php bloginfo('name'); ?>
    </span>
  </a>

  <p class="header__tagline">
    <?php echo get_bloginfo('description'); ?>
  </p>
</header>
