<?php
/**
 * Template Name: Footer
 * @package lion
 * @source project-lion
 * 
**/ 
?>


    <!-- Particle
    ============================================ -->
    <div id="container-particle">
        <?php for ($i=0; $i < 25; $i++) : ?>
            <div class="particle particle__<?= $i; ?>"></div>
        <?php endfor; ?>
    </div>
    <!-- End Particle -->

    <!-- Scripts Theme 
    ============================================ -->
    <script src="<?= $url; ?>/js/theme.js"></script>
    <script src="<?= $url; ?>/js/plugins.js"></script>

</div>
<!-- End Wrapper  -->


</body>
</html>