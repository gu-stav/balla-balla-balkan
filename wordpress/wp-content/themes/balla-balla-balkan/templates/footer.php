<?php
$user1 = get_user_by('login', 'krsto');
$user1_data = get_userdata($user1->ID);
$user1_image = wp_get_attachment_image(get_field('image', 'user_' . $user1->ID), 'thumbnail', false, array('class' => 'footer__person-image'));

$user2 = get_user_by('login', 'daniel');
$user2_data = get_userdata($user2->ID);
$user2_image = wp_get_attachment_image(get_field('image', 'user_' . $user2->ID), 'thumbnail', false, array('class' => 'footer__person-image'));

?>

<footer class="footer">
  <div class="footer__person">
    <header class="footer__person-header">
      <?php echo $user1_image; ?>
    </header>

    <h3 class="footer__person-name">
      <?php echo esc_html($user1_data->display_name); ?>
    </h3>

    <p class="footer__person-teaser">
      <?php echo esc_html($user1_data->description); ?>
    </p>

    <a href="<?php echo esc_url($user2_data->user_url); ?>"
       class="footer__person-link">
      <?php echo esc_html($user2_data->user_url); ?>
    </a>
  </div>
  <div class="footer__person">
    <header class="footer__person-header">
      <?php echo $user2_image; ?>
    </header>

    <h3 class="footer__person-name">
      <?php echo esc_html($user2_data->display_name); ?>
    </h3>

    <p class="footer__person-teaser">
      <?php echo esc_html($user2_data->description); ?>
    </p>

    <a href="<?php echo esc_url($user2_data->user_url); ?>"
       class="footer__person-link">
      <?php echo esc_html($user2_data->user_url); ?>
    </a>
  </div>
</footer>
