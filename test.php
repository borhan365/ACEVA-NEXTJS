<!-- new hero section -->
<section class="new-hero-section">
  <div class="container">
    <div class="main-hero-wrapper">

          <!-- sub lead news | mobile hide -->
          <div class="sub mobile-hide">
            <?php get_sidebar() ?>
          </div>

          <!-- lead news -->
          <div class="lead">
          <div id="player" style="width: 900px; height: 576px;"></div>
<script src="https://bradmax.com/client/files/player-js/713c2cd1591d41f4e58d63c011d8a48e2bf6a385_15969/player.js" type="text/javascript" data-bs-parent-id="player" data-bs-variables="eyJkYXRhUHJvdmlkZXIiOnsic291cmNlIjpbeyJ1cmwiOiJodHRwczovL2xpdmUuY2JudHZ1c2EubmV0L2FwcC9saXZlLWNibnR2dXNhLm0zdTgifSx7InVybCI6Imh0dHBzOi8vbGl2ZS5jYm50dnVzYS5uZXQvYXBwL2xpdmUtY2JudHZ1c2EubTN1OCJ9XSwiZHVyYXRpb24iOjczNC4wOTc0MTV9fQ=="></script>
          </div>

          <!-- sub lead news | desktop hide -->
          <div class="sub mobile-sub-lead-news">
              <?php
                  $arg = array(
                    'post_type'         => 'post',
                    'post_status'       => 'publish',
                    'category_name'     => 'সাব-লিড',
                    'posts_per_page'    => 1
                  );

                  $connDB = new WP_Query($arg);

                  if($connDB->have_posts()){
                  while($connDB->have_posts()) : $connDB->the_post();

              ?>
            <!-- sub lead news -->
            <div class="sub-lead-news">
                <div class="sub-lead-news-thumb">
                    <a class="link" href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail(); ?>
                    </a>
                </div>
                <div class="sub-lead-news-content">
                    <a class="link" href="<?php the_permalink(); ?>">
                        <h4><?php // the_secondary_title(); ?></h4>                    
                        <h2><?php the_title(); ?> </h2>
                        <p>
                            <?php echo wp_trim_words( get_the_excerpt(), 40, '...' ); ?>
                        </p>
                    </a>
                </div>
            </div>

            <?php endwhile;  } ?>
              <?php wp_reset_query(); ?>
          </div>


    </div>
  </div>
</section>
<!-- new hero section -->